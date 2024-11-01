import { Bitrix24 } from "src";
import { CRMAdd, CRMListOptions, CRMUpdate } from "src/Types/CRMTypes";

export class Deal {
  private readonly bitrix24: Bitrix24;

  constructor(bitrix24: Bitrix24) {
    this.bitrix24 = bitrix24;
  }

  async add({ fields, params }: CRMAdd) {
    const response = await this.bitrix24.call("crm.deal.add", {
      fields,
      params,
    });

    return await response.json();
  }

  async get(id: string) {
    if (isNaN(parseFloat(id))) {
      throw new Error("Invalid Id");
    }

    const response = await this.bitrix24.call("crm.deal.get", { id });
    return await response.json();
  }

  async delete(id: string) {
    if (isNaN(parseFloat(id))) {
      throw new Error("Invalid Id");
    }

    const response = await this.bitrix24.call("crm.deal.delete", { id });
    return await response.json();
  }

  async list({ order, filter, select }: CRMListOptions) {
    const response = await this.bitrix24.call("crm.deal.get", {
      order,
      filter,
      select,
    });
    return await response.json();
  }

  async update({ id, fields }: CRMUpdate) {
    const response = await this.bitrix24.call("crm.deal.update", {
      id,
      fields,
    });

    return await response.json();
  }
}