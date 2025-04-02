package com.solution.ts.entity;


import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.solution.ts.constants.ColumnConstants;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Where;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;
import java.time.Instant;
import java.util.Date;
import java.util.UUID;

@Getter
@Setter
@EntityListeners({AuditingEntityListener.class})
@MappedSuperclass
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
@Where(clause = "sys_Deleted = false")
public class BaseObject implements Serializable {

//    private static final java.util.UUID UUID = ;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO) // Use AUTO for UUID generation
    @Column(updatable = false, nullable = false)
    protected UUID id;

    @LastModifiedBy
    @Column(name = ColumnConstants.COLUMN_BASIC_MODBY, length = 50)
    private String modifiedBy;

    @LastModifiedBy
    @Column(name = ColumnConstants.COLUMN_BASIC_IDOFLASTMODBY, length = 50)
    private String idOfLastModifiedBy;

    @LastModifiedDate
    @Column(name = ColumnConstants.COLUMN_BASIC_MODAT)
    private Instant modifiedDate;

    @CreatedDate
    @Column(name = ColumnConstants.COLUMN_BASIC_CREATED_BY, nullable = false, updatable = false)
    private String createdBy;

    @Column(name = ColumnConstants.COLUMN_BASIC_CREATED_AT, updatable = false)
    private Date createdAt;

    @CreatedBy
    @Column(name = ColumnConstants.COLUMN_BASIC_CREATORID, nullable = false, updatable = false)
    private String creatorId;

    @Column(name = ColumnConstants.COLUMN_BASIC_DELETED, nullable = false)
    private boolean deleted = false;

    @Column(name = ColumnConstants.COLUMN_BASIC_DELETED_BY, length = 50)
    private String deletedBy;

    @Column(name = ColumnConstants.COLUMN_BASIC_DELETED_DATE)
    private Date deletedDate;

}
