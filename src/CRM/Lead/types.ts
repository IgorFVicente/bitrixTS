import { TimeResult } from "../../../Types/types";

export interface LeadList {
  order?: Record<string, any>;
  filter?: Record<string, any>;
  select?: string[];
}

export interface LeadUpdate {
  id: string;
  fields?: Record<string, any>;
  params?: {
    REGISTER_SONET_EVENT: "Y" | "N";
  };
}

export interface LeadAdd {
  fields?: Record<string, any>;
  params?: {
    REGISTER_SONET_EVENT: "Y" | "N";
  };
}

export interface LeadGetResponse {
  result: Record<string, any>;
  time: TimeResult;
}

export interface LeadListResponse {
  result: Record<string, any>[];
  total: number;
  next: number;
  time: TimeResult;
}

export interface LeadAddResponse {
  result: string;
  time: TimeResult;
}

export interface LeadUpdateResponse {
  result: boolean;
  time: TimeResult;
}

export interface LeadDeleteResponse {
  result: boolean;
  time: TimeResult;
}

export interface LeadFieldsResponse {
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
