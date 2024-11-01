import { Bitrix24 } from "../../..";
import {
  AddContactToCompany,
  CompanyContactFields,
  CompanyContactItems,
  RemoveContactFromCompany,
} from "./types";

export class CompanyContact {
  private readonly bitrix24: Bitrix24;

  constructor(bitrix24: Bitrix24) {
    this.bitrix24 = bitrix24;
  }

  public async add({ id, fields }: AddContactToCompany) {
    return await this.bitrix24.call("crm.company.contact.add", {
      id,
      fields,
    });
  }

  public async remove({ id, fields }: RemoveContactFromCompany) {
    return await this.bitrix24.call("crm.company.contact.delete", {
      id,
      fields,
    });
  }

  public async fields(): Promise<CompanyContactFields> {
    return await this.bitrix24.call("crm.company.contact.fields");
  }

  public async clearContacts(id: string | number) {
    return await this.bitrix24.call("crm.company.contact.items.delete", { id });
  }

  public async getContact(id: string | number): Promise<CompanyContactItems> {
    return await this.bitrix24.call("crm.company.contact.items.get", { id });
  }

  public async setContacts({ id, items }) {
    return await this.bitrix24.call("crm.company.contact.items.set", {
      id,
      items,
    });
  }
}
