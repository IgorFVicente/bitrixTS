import { Bitrix24 } from "..";
import { Company } from "./Company";
import { Contact } from "./Contact";
import { Deal } from "./Deal";
import { Lead } from "./Lead";

export class CRM {
  public readonly company: Company;
  public readonly contact: Contact;
  public readonly lead: Lead;
  public readonly deal: Deal;

  constructor(private readonly bitrix24: Bitrix24) {
    this.company = new Company(this.bitrix24);
    this.contact = new Contact(this.bitrix24);
    this.deal = new Deal(this.bitrix24);
    this.lead = new Lead(this.bitrix24);
  }
}
