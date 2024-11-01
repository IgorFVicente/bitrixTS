import { Bitrix24 } from "src";
import {
  ContactAdd,
  ContactAddResponse,
  ContactDeleteResponse,
  ContactFieldsResponse,
  ContactGetResponse,
  ContactList,
  ContactListResponse,
  ContactUpdate,
  ContactUpdateResponse,
} from "./types";
import { ContactCompany } from "./ContactCompany";

export class Contact {
  private readonly bitrix24: Bitrix24;
  public readonly company: ContactCompany;

  constructor(bitrix24: Bitrix24) {
    this.bitrix24 = bitrix24;
    this.company = new ContactCompany(bitrix24);
  }

  public async get(id: string): Promise<ContactGetResponse> {
    if (isNaN(parseInt(id))) {
      throw new Error("Id must be numeric");
    }

    return await this.bitrix24.call("crm.contact.get", { id });
  }

  public async list({
    order,
    filter,
    select,
  }: ContactList): Promise<ContactListResponse> {
    return await this.bitrix24.call("crm.contact.get", {
      order,
      filter,
      select,
    });
  }

  public async add({
    fields,
    params,
  }: ContactAdd): Promise<ContactAddResponse> {
    return await this.bitrix24.call("crm.contact.add", {
      fields,
      params,
    });
  }

  public async update({
    id,
    fields,
  }: ContactUpdate): Promise<ContactUpdateResponse> {
    return await this.bitrix24.call("crm.contact.update", {
      id,
      fields,
    });
  }

  public async delete(id: string): Promise<ContactDeleteResponse> {
    if (isNaN(parseInt(id))) {
      throw new Error("Id must be numeric");
    }

    return await this.bitrix24.call("crm.contact.delete", {
      id,
    });
  }

  public async fields(): Promise<ContactFieldsResponse> {
    return await this.bitrix24.call("crm.contact.fields");
  }
}
