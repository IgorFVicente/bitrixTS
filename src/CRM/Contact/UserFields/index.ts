import { Bitrix24 } from "../../..";
import {
  ContactUserFieldAdd,
  ContactUserFieldList,
  ContactUserFieldUpdate,
} from "./types";

export class ContactUserField {
  private readonly bitrix24: Bitrix24;

  constructor(bitrix24: Bitrix24) {
    this.bitrix24 = bitrix24;
  }

  public async get(id: string) {
    return await this.bitrix24.call("crm.contact.userfield.get", {
      id,
    });
  }

  public async list({ order, filter, START }: ContactUserFieldList) {
    return await this.bitrix24.call("crm.contact.userfield.list", {
      order,
      filter,
      START,
    });
  }

  public async add({ fields, LIST }: ContactUserFieldAdd) {
    return await this.bitrix24.call("crm.contact.userfield.add", {
      fields,
      LIST,
    });
  }

  public async update({ id, fields, LIST }: ContactUserFieldUpdate) {
    return await this.bitrix24.call("crm.contact.userfield.add", {
      id,
      fields,
      LIST,
    });
  }

  public async delete(id: string) {
    return await this.bitrix24.call("crm.contact.userfield.delete", {
      id,
    });
  }
}
