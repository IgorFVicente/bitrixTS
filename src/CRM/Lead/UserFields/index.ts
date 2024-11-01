import { Bitrix24 } from "../../..";
import {
  LeadUserFieldAdd,
  LeadUserFieldList,
  LeadUserFieldUpdate,
} from "./types";

export class LeadUserField {
  private readonly bitrix24: Bitrix24;

  constructor(bitrix24: Bitrix24) {
    this.bitrix24 = bitrix24;
  }

  public async get(id: string) {
    return await this.bitrix24.call("crm.lead.userfield.get", {
      id,
    });
  }

  public async list({ order, filter, START }: LeadUserFieldList) {
    return await this.bitrix24.call("crm.lead.userfield.list", {
      order,
      filter,
      START,
    });
  }

  public async add({ fields, LIST }: LeadUserFieldAdd) {
    return await this.bitrix24.call("crm.lead.userfield.add", {
      fields,
      LIST,
    });
  }

  public async update({ id, fields, LIST }: LeadUserFieldUpdate) {
    return await this.bitrix24.call("crm.lead.userfield.add", {
      id,
      fields,
      LIST,
    });
  }

  public async delete(id: string) {
    return await this.bitrix24.call("crm.lead.userfield.delete", {
      id,
    });
  }
}
