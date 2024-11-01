export interface CompanyUserFieldList {
  order: Record<string, any>;
  filter: Record<string, any>;
  START: number;
}

// FALTA FAZER
export interface CompanyUserFieldAdd {
  fields: Record<string, any>;
  LIST?: {};
}

// FALTA FAZER
export interface CompanyUserFieldUpdate {
  id: string | number;
  fields: Record<string, any>;
  LIST?: {};
}
