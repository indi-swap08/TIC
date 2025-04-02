package com.solution.ts.constants;


import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@NoArgsConstructor(access = AccessLevel.PRIVATE)
@Getter
public final class ColumnConstants {

    public static final String COLUMN_BASIC_ID = "id";
    public static final String COLUMN_BASIC_CREATED_BY = "createdBy";
    public static final String COLUMN_BASIC_CREATED_AT = "createdAt";
    public static final String COLUMN_BASIC_CREATORID = "creator_id";
    public static final String COLUMN_BASIC_MODBY = "modified_by";
    public static final String COLUMN_BASIC_MODAT = "modified_at";
    public static final String COLUMN_BASIC_IDOFLASTMODBY = "id_of_last_modified_by";
    public static final String COLUMN_BASIC_DELETED = "deleted";
    public static final String COLUMN_BASIC_DELETED_BY = "deletedBy";
    public static final String COLUMN_BASIC_DELETED_DATE = "deletedDate";
    public static final String COLUMN_BASIC_RESTORED = "restored";
    public static final String COLUMN_BASIC_RESTORED_BY = "restoredBy";
    public static final String COLUMN_BASIC_RESTORED_DATE = "restoredDate";
    public static final String COLUMN_BASIC_TYPE = "type";

    //------------------------USER CONSTANTS-----------------------------------
    public static final String TABLE_USER = "user";
    public static final String COLUMN_USER_USERNAME = "username";
    public static final String COLUMN_USER_PASSWORD = "password";
    public static final String COLUMN_USER_EMAIL = "email";
    public static final String COLUMN_USER_FIRST_NAME = "firstName";
    public static final String COLUMN_USER_LAST_NAME = "lastName";

    //------------------------TICKET CONSTANTS-----------------------------------
    public static final String TABLE_TICKET = "ticket";
    public static final String COLUMN_TICKET_USER = "userId";
    public static final String COLUMN_TICKET_NUMBER = "number";
    public static final String COLUMN_TICKET_TITLE = "title";
    public static final String COLUMN_TICKET_DESCRIPTION = "description";
    public static final String COLUMN_TICKET_STATUS = "status";
    public static final String COLUMN_TICKET_PRIORITY = "priority";
    public static final String COLUMN_TICKET_REMARK = "remark";
    public static final String COLUMN_TICKET_RESOLUTION_DATE = "resolutionDate";


}
