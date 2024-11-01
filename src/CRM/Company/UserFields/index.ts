import { Bitrix24 } from "../../..";
import {
  CompanyUserFieldAdd,
  CompanyUserFieldList,
  CompanyUserFieldUpdate,
} from "./types";

export class CompanyUserField {
  private readonly bitrix24: Bitrix24;

  constructor(bitrix24: Bitrix24) {
    this.bitrix24 = bitrix24;
  }

  public async get(id: string) {
    return await this.bitrix24.call("crm.company.userfield.get", {
      id,
    });
  }

  public async list({ order, filter, START }: CompanyUserFieldList) {
    return await this.bitrix24.call("crm.company.userfield.list", {
      order,
      filter,
      START,
    });
  }

  public async add({ fields, LIST }: CompanyUserFieldAdd) {
    return await this.bitrix24.call("crm.company.userfield.add", {
      fields,
      LIST,
    });
  }

  public async update({ id, fields, LIST }: CompanyUserFieldUpdate) {
    return await this.bitrix24.call("crm.company.userfield.add", {
      id,
      fields,
      LIST,
    });
  }

  public async delete(id: string) {
    return await this.bitrix24.call("crm.company.userfield.delete", {
      id,
    });
  }
}
