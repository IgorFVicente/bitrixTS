import { Bitrix24 } from "../../..";
import {
  DealUserFieldAdd,
  DealUserFieldList,
  DealUserFieldUpdate,
} from "./types";

export class DealUserField {
  private readonly bitrix24: Bitrix24;

  constructor(bitrix24: Bitrix24) {
    this.bitrix24 = bitrix24;
  }

  public async get(id: string) {
    return await this.bitrix24.call("crm.deal.userfield.get", {
      id,
    });
  }

  public async list({ order, filter, START }: DealUserFieldList) {
    return await this.bitrix24.call("crm.deal.userfield.list", {
      order,
      filter,
      START,
    });
  }

  public async add({ fields, LIST }: DealUserFieldAdd) {
    return await this.bitrix24.call("crm.deal.userfield.add", {
      fields,
      LIST,
    });
  }

  public async update({ id, fields, LIST }: DealUserFieldUpdate) {
    return await this.bitrix24.call("crm.deal.userfield.add", {
      id,
      fields,
      LIST,
    });
  }

  public async delete(id: string) {
    return await this.bitrix24.call("crm.deal.userfield.delete", {
      id,
    });
  }
}
