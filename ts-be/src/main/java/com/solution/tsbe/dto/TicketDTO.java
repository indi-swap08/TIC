package com.solution.tsbe.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@EqualsAndHashCode(callSuper = false)
@NoArgsConstructor
public class TicketDTO extends BaseDTO
{
    private String subject;

    private String description;
}
