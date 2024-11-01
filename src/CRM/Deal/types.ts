import { TimeResult } from "../../../Types/types";

export interface DealList {
  order?: Record<string, any>;
  filter?: Record<string, any>;
  select?: string[];
}

export interface DealUpdate {
  id: string;
  fields?: Record<string, any>;
  params?: {
    REGISTER_SONET_EVENT: "Y" | "N";
  };
}

export interface DealAdd {
  fields?: Record<string, any>;
  params?: {
    REGISTER_SONET_EVENT: "Y" | "N";
  };
}

export interface DealGetResponse {
  result: Record<string, any>;
  time: TimeResult;
}

export interface DealListResponse {
  result: Record<string, any>[];
  total: number;
  next: number;
  time: TimeResult;
}

export interface DealAddResponse {
  result: string;
  time: TimeResult;
}

export interface DealUpdateResponse {
  result: boolean;
  time: TimeResult;
}

export interface DealDeleteResponse {
  result: boolean;
  time: TimeResult;
}

export interface DealFieldsResponse {
  result: {
    [key: string]: {
      type: string;
      isRequired: boolean;
      isReadOnly: boolean;
      isImmutable: boolean;
      isMultiple: boolean;
      isDynamic: boolean;
      title: string;
      statusType?: string;
    };
  };
  time: TimeResult;
}
