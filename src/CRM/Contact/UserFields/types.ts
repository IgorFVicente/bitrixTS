export interface ContactUserFieldList {
  order: Record<string, any>;
  filter: Record<string, any>;
  START: number;
}

// FALTA FAZER
export interface ContactUserFieldAdd {
  fields: Record<string, any>;
  LIST?: {};
}

// FALTA FAZER
export interface ContactUserFieldUpdate {
  id: string | number;
  fields: Record<string, any>;
  LIST?: {};
}
