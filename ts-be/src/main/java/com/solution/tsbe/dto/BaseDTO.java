package com.solution.tsbe.dto;

import java.sql.Timestamp;
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
}
