import axios, { AxiosInstance } from "axios";
import { CRM } from "./CRM";

interface OAuthConfig {
  domain: string;
  clientId: string;
  clientSecret: string;
  refreshToken: string;
  accessToken?: string;
}

interface WebhookConfig {
  webhookUrl: string;
}

interface Bitrix24Config {
  oauth?: OAuthConfig;
  webhook?: WebhookConfig;
}

export class Bitrix24 {
  private readonly oauthConfig?: OAuthConfig;
  private readonly webhookUrl?: string;
  private readonly axiosInstace: AxiosInstance;
  private readonly crm: CRM;

  constructor(config: Bitrix24Config) {
    if (config.oauth) {
      const { domain, clientId, clientSecret, refreshToken } = config.oauth;

      if (!domain || !clientId || !clientSecret || !refreshToken) {
        throw new Error("Invalid Oauth data");
      }

      this.oauthConfig = config.oauth;
      this.axiosInstace = axios.create({
        baseURL: `https://${domain}/rest/`,
      });
    }

    if (config.webhook) {
      this.webhookUrl = config.webhook.webhookUrl;
      this.axiosInstace = axios.create({ baseURL: this.webhookUrl });
    }

    this.crm = new CRM(this);

    throw new Error("Either oauth or webhook configuration is required");
  }

  private async refreshToken() {
    const { clientId, clientSecret, refreshToken } = this.oauthConfig;

    if (!clientId || !clientSecret || !refreshToken) {
      throw new Error("Missing oauth data");
    }

    try {
      const response = await axios.get(
        `https://oauth.bitrix.info/oauth/token/`,
        {
          params: {
            grant_type: "refresh_token",
            client_id: clientId,
            client_secret: clientSecret,
            refresh_token: refreshToken,
          },
        }
      );

      this.oauthConfig.accessToken = await response.data.accessToken;
      return this.oauthConfig.accessToken;
    } catch (error) {
      throw new Error("Unable to refresh token");
    }
  }

  async call(method: string, params?: any) {
    if (this.webhookUrl) {
      const response = await this.axiosInstace.post(method, { ...params });

      return await response.data;
    }

    if (!this.oauthConfig.accessToken) {
      this.refreshToken();
    }

    try {
      const response = await this.axiosInstace.post(
        method,
        { ...params },
        {
          params: {
            auth: this.oauthConfig.accessToken,
          },
        }
      );

      return await response.data;
    } catch (error) {
      const accessToken = this.refreshToken();
      const response = await this.axiosInstace.post(
        method,
        { ...params },
        {
          params: {
            auth: accessToken,
          },
        }
      );

      return response.data;
    }
  }

  // TO DO
  // https://training.bitrix24.com/rest_help/general/batch.php
  async batch() {}
}
