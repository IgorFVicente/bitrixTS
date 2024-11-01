export interface DealUserFieldList {
  order: Record<string, any>;
  filter: Record<string, any>;
  START: number;
}

// FALTA FAZER
export interface DealUserFieldAdd {
  fields: Record<string, any>;
  LIST?: {};
}

// FALTA FAZER
export interface DealUserFieldUpdate {
  id: string | number;
  fields: Record<string, any>;
  LIST?: {};
}
