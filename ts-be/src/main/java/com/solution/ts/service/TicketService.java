package com.solution.ts.service;

import com.solution.ts.entity.Ticket;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface TicketService {
    List<Ticket> findAll();
    Ticket save(Ticket newTicket);
    Ticket findById(Long id);
    Ticket update(Ticket newTicket, Long id);
    void delete(Long id);

}
