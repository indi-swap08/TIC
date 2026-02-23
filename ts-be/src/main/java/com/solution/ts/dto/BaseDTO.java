package com.solution.ts.dto;

import java.sql.Timestamp;
import java.util.Date;

import lombok.Data;

@Data
public class BaseDTO {
    private Long id;
    private Timestamp createdAt;
    private String creator;
    private boolean sysDeleted;
    boolean modified;
    String lastModifiedBy;
    Timestamp modifiedAt;
    Date deletedDate;
    String deletedBy;
    boolean deleted;
}
