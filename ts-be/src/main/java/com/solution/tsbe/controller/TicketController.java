package com.solution.tsbe.controller;


import com.solution.tsbe.entity.Ticket;
import com.solution.tsbe.service.TicketService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TicketController {
    private final TicketService ticketService;


    TicketController(TicketService ticketService) {
        this.ticketService = ticketService;
    }


    // Aggregate root
    // tag::get-aggregate-root[]
    @GetMapping("/tickets")
    List<Ticket> findAll() {
        return this.ticketService.findAll();
    }
    // end::get-aggregate-root[]

    @PostMapping("/tickets")
    Ticket save(@RequestBody Ticket newTicket) {
        return this.ticketService.save(newTicket);
    }

    // Single item

    @GetMapping("/tickets/{id}")
    Ticket findById(@PathVariable Long id) {

        return this.ticketService.findById(id);
//                .orElseThrow(() -> new EmployeeNotFoundException(id));
    }

    @PutMapping("/tickets/{id}")
    Ticket update(@RequestBody Ticket newTicket, @PathVariable Long id) {

        return this.ticketService.findById(id);
    }

    @DeleteMapping("/tickets/{id}")
    void delete(@PathVariable Long id) {
        this.ticketService.delete(id);
    }
}
