import { Bitrix24 } from "src";
import {
  CompanyAdd,
  CompanyAddResponse,
  CompanyDeleteResponse,
  CompanyFieldsResponse,
  CompanyGetResponse,
  CompanyList,
  CompanyListResponse,
  CompanyUpdate,
  CompanyUpdateResponse,
} from "./types";
import { CompanyContact } from "./CompanyContact";

export class Company {
  private readonly bitrix24: Bitrix24;
  public readonly contact: CompanyContact;

  constructor(bitrix24: Bitrix24) {
    this.bitrix24 = bitrix24;
    this.contact = new CompanyContact(bitrix24);
  }

  public async get(id: string): Promise<CompanyGetResponse> {
    if (isNaN(parseInt(id))) {
      throw new Error("Id must be numeric");
    }

    return await this.bitrix24.call("crm.company.get", { id });
  }

  public async list({
    order,
    filter,
    select,
  }: CompanyList): Promise<CompanyListResponse> {
    return await this.bitrix24.call("crm.company.get", {
      order,
      filter,
      select,
    });
  }

  public async add({
    fields,
    params,
  }: CompanyAdd): Promise<CompanyAddResponse> {
    return await this.bitrix24.call("crm.company.add", {
      fields,
      params,
    });
  }

  public async update({
    id,
    fields,
  }: CompanyUpdate): Promise<CompanyUpdateResponse> {
    return await this.bitrix24.call("crm.company.update", {
      id,
      fields,
    });
  }

  public async delete(id: string): Promise<CompanyDeleteResponse> {
    if (isNaN(parseInt(id))) {
      throw new Error("Id must be numeric");
    }

    return await this.bitrix24.call("crm.company.delete", {
      id,
    });
  }

  public async fields(): Promise<CompanyFieldsResponse> {
    return await this.bitrix24.call("crm.company.fields");
  }
}
