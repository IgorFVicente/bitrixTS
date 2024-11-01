import { Bitrix24 } from "src";
import {
  DealAdd,
  DealAddResponse,
  DealDeleteResponse,
  DealFieldsResponse,
  DealGetResponse,
  DealList,
  DealListResponse,
  DealUpdate,
  DealUpdateResponse,
} from "./types";

export class Deal {
  private readonly bitrix24: Bitrix24;

  constructor(bitrix24: Bitrix24) {
    this.bitrix24 = bitrix24;
  }

  public async get(id: string): Promise<DealGetResponse> {
    if (isNaN(parseInt(id))) {
      throw new Error("Id must be numeric");
    }

    return await this.bitrix24.call("crm.deal.get", { id });
  }

  public async list({
    order,
    filter,
    select,
  }: DealList): Promise<DealListResponse> {
    return await this.bitrix24.call("crm.deal.get", {
      order,
      filter,
      select,
    });
  }

  public async add({ fields, params }: DealAdd): Promise<DealAddResponse> {
    return await this.bitrix24.call("crm.deal.add", {
      fields,
      params,
    });
  }

  public async update({ id, fields }: DealUpdate): Promise<DealUpdateResponse> {
    return await this.bitrix24.call("crm.deal.update", {
      id,
      fields,
    });
  }

  public async delete(id: string): Promise<DealDeleteResponse> {
    if (isNaN(parseInt(id))) {
      throw new Error("Id must be numeric");
    }

    return await this.bitrix24.call("crm.deal.delete", {
      id,
    });
  }

  public async fields(): Promise<DealFieldsResponse> {
    return await this.bitrix24.call("crm.deal.fields");
  }
}
