package com.solution.ts.entity;

import com.solution.ts.constants.ColumnConstants;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.LocalDateTime;

@EqualsAndHashCode(callSuper = false)
@Entity
@Data
@Table(name = ColumnConstants.TABLE_USER)
public class User extends BaseObject{

    @Column(nullable = false, unique = true, length = 50)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(name = ColumnConstants.COLUMN_USER_EMAIL, nullable = false, unique = true, length = 100)
    private String email;

    @Column(name = ColumnConstants.COLUMN_USER_FIRST_NAME, length = 50)
    private String firstName;

    @Column(name = ColumnConstants.COLUMN_USER_LAST_NAME, length = 50)
    private String lastName;
}