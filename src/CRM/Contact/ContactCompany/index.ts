import { Bitrix24 } from "../../..";
import {
  AddCompanyToContact,
  ContactCompanyFields,
  ContactCompanyItems,
  RemoveCompanyFromContact,
} from "./types";

export class ContactCompany {
  private readonly bitrix24: Bitrix24;

  constructor(bitrix24: Bitrix24) {
    this.bitrix24 = bitrix24;
  }

  public async add({ id, fields }: AddCompanyToContact) {
    return await this.bitrix24.call("crm.contact.company.add", {
      id,
      fields,
    });
  }

  public async remove({ id, fields }: RemoveCompanyFromContact) {
    return await this.bitrix24.call("crm.contact.company.delete", {
      id,
      fields,
    });
  }

  public async fields(): Promise<ContactCompanyFields> {
    return await this.bitrix24.call("crm.contact.company.fields");
  }

  public async clearCompanies(id: string | number) {
    return await this.bitrix24.call("crm.contact.company.items.delete", { id });
  }

  public async getContact(id: string | number): Promise<ContactCompanyItems> {
    return await this.bitrix24.call("crm.contact.company.items.get", { id });
  }

  public async setCompanies({ id, items }) {
    return await this.bitrix24.call("crm.contact.company.items.set", {
      id,
      items,
    });
  }
}
