// general interface for metadata of database
export interface BaseResponse {
  id?: string;
  created?: Date | string;
  lastModifiedDate?: Date | string;
  creator?: string;
  imported?: boolean;
  deleted?: boolean;
  deletedBy?: string;
  deletedDate?: Date | string;
}
