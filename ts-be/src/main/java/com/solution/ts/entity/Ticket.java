package com.solution.ts.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
public class Ticket extends BaseObject {

    private String subject;

    private String description;

    // standard constructors

    // standard getters and setters
}