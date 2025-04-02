package com.solution.ts.entity;

import com.solution.ts.constants.ColumnConstants;
import com.solution.ts.constants.enums.TicketPriority;
import com.solution.ts.constants.enums.TicketState;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.antlr.v4.runtime.misc.NotNull;
import org.springframework.data.annotation.CreatedDate;

import java.time.Instant;

@Setter
@Getter
@Entity
public class Ticket extends BaseObject {

    @ManyToOne
    @JoinColumn(name = ColumnConstants.COLUMN_TICKET_USER, referencedColumnName = "id")
    User user;

    @Column(name = ColumnConstants.COLUMN_TICKET_NUMBER, nullable = false)
    private String number;

    @Column(name = ColumnConstants.COLUMN_TICKET_TITLE)
    private String title;

    private String description;

    @Enumerated(EnumType.STRING)
    @Column(name = ColumnConstants.COLUMN_TICKET_STATUS, nullable = false)
    private TicketState status;

    @Enumerated(EnumType.STRING)
    @Column(name = ColumnConstants.COLUMN_TICKET_PRIORITY, nullable = false)
    private TicketPriority priority;

    @Column(name = ColumnConstants.COLUMN_TICKET_REMARK)
    private String remark;

    @Column(name = ColumnConstants.COLUMN_TICKET_RESOLUTION_DATE)
    protected Instant resolutionDate;
}