package com.solution.ts.service.impl;

import com.solution.ts.dto.TicketDTO;
import com.solution.ts.entity.Ticket;
import com.solution.ts.repository.TicketRepository;
import com.solution.ts.service.TicketService;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class TicketServiceImpl implements TicketService {
    private final TicketRepository ticketRepository;

    TicketServiceImpl(TicketRepository ticketRepository){
        this.ticketRepository=ticketRepository;
    }

    @Override
    public List<Ticket> findAll() {
        return this.ticketRepository.findAll();
    }

    @Override
    public Ticket save(Ticket newTicket){
        return this.ticketRepository.save(newTicket);
    };

    @Override
    public Ticket findById(Long id){
        return this.ticketRepository.findById(id).get();
//                .orElseThrow(() -> new EmployeeNotFoundException(id));
    };

    @Override
    public Ticket update(Ticket newTicket, Long id){
        return null;
//        return this.ticketRepository.findById(id)
//                .map(ticket -> {
//                   ticket.setdes
//                    employee.setRole(newEmployee.getRole());
//                    return repository.save(employee);
//                })
//                .orElseGet(() -> {
//                    newEmployee.setId(id);
//                    return repository.save(newEmployee);
//                });
    }

    @Override
    public void delete(Long id){
        this.ticketRepository.deleteById(id);
    };
}
