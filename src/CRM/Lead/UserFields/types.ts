export interface LeadUserFieldList {
  order: Record<string, any>;
  filter: Record<string, any>;
  START: number;
}

// FALTA FAZER
export interface LeadUserFieldAdd {
  fields: Record<string, any>;
  LIST?: {};
}

// FALTA FAZER
export interface LeadUserFieldUpdate {
  id: string | number;
  fields: Record<string, any>;
  LIST?: {};
}
