import { Bitrix24 } from "src";
import {
  LeadAdd,
  LeadAddResponse,
  LeadDeleteResponse,
  LeadFieldsResponse,
  LeadGetResponse,
  LeadList,
  LeadListResponse,
  LeadUpdate,
  LeadUpdateResponse,
} from "./types";

export class Lead {
  private readonly bitrix24: Bitrix24;

  constructor(bitrix24: Bitrix24) {
    this.bitrix24 = bitrix24;
  }

  public async get(id: string): Promise<LeadGetResponse> {
    if (isNaN(parseInt(id))) {
      throw new Error("Id must be numeric");
    }

    return await this.bitrix24.call("crm.lead.get", { id });
  }

  public async list({
    order,
    filter,
    select,
  }: LeadList): Promise<LeadListResponse> {
    return await this.bitrix24.call("crm.lead.get", {
      order,
      filter,
      select,
    });
  }

  public async add({ fields, params }: LeadAdd): Promise<LeadAddResponse> {
    return await this.bitrix24.call("crm.lead.add", {
      fields,
      params,
    });
  }

  public async update({ id, fields }: LeadUpdate): Promise<LeadUpdateResponse> {
    return await this.bitrix24.call("crm.lead.update", {
      id,
      fields,
    });
  }

  public async delete(id: string): Promise<LeadDeleteResponse> {
    if (isNaN(parseInt(id))) {
      throw new Error("Id must be numeric");
    }

    return await this.bitrix24.call("crm.lead.delete", {
      id,
    });
  }

  public async fields(): Promise<LeadFieldsResponse> {
    return await this.bitrix24.call("crm.lead.fields");
  }
}
