package com.solution.ts.dto;

import com.solution.ts.constants.enums.TicketPriority;
import com.solution.ts.constants.enums.TicketStatus;
import com.solution.ts.entity.User;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Data
@EqualsAndHashCode(callSuper = false)
@NoArgsConstructor
public class TicketDTO extends BaseDTO
{
    private User user;
    private String number;
    private String title;
    private String description;
    private TicketStatus status;
    private TicketPriority priority;
    private String remark;
    private Instant resolutionDate;
}
