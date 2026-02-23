// general interface for metadata of database
export interface Base {
  id?: string;
  createdAt?: Date | string;
  modifiedAt?: Date | string;
  creator?: string;
  lastModifiedBy?: string;
  modified?: boolean;
  deleted?: boolean;
  deletedBy?: string;
  deletedDate?: Date | string;
}
