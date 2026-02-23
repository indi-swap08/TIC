import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, interval, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { TicketStatus, TicTicket, TicketPriority } from '../model/ticket.model';
import { TicUser } from '../model/user.model';

export interface TicketStats {
    open: number;
    inProgress: number;
    resolved: number;
    slaBreached: number;
    closed: number;
    pending: number;
}

@Injectable({
    providedIn: 'root'
})
export class TicketDataService {
    private users: TicUser[] = [
        { id: 'u1', firstName: 'John', lastName: 'Doe', email: 'john@enterprise.com', username: 'jdoe' },
        { id: 'u2', firstName: 'Jane', lastName: 'Smith', email: 'jane@enterprise.com', username: 'jsmith' },
        { id: 'u3', firstName: 'Alex', lastName: 'Johnson', email: 'alex@enterprise.com', username: 'ajonhson' },
        { id: 'u4', firstName: 'Support', lastName: 'Admin', email: 'admin@enterprise.com', username: 'admin' }
    ];

    private tickets: TicTicket[] = [
        {
            id: 't1',
            number: 'TIC-1001',
            title: 'VPN Connection Issues in London Office',
            description: 'Several employees reporting they cannot connect to the London VPN gateway since this morning.',
            user: this.users[0],
            assignee: this.users[3],
            priority: 'HIGH',
            status: 'OPEN',
            category: 'Network',
            createdAt: new Date(Date.now() - 3600000 * 2),
            updatedAt: new Date(Date.now() - 3600000),
            slaDue: new Date(Date.now() + 3600000 * 4),
            remark: '',
            tags: ['VPN', 'Network', 'London'],
            comments: [
                { id: 'c1', user: this.users[3], content: 'Investigating the gateway logs now.', createdAt: new Date(Date.now() - 3600000 * 1.5), isInternal: true }
            ]
        },
        {
            id: 't2',
            number: 'TIC-1002',
            title: 'New Employee Onboarding - Sarah Connor',
            description: 'Setup laptop and access for new hire Sarah Connor starting next Monday.',
            user: this.users[1],
            assignee: this.users[2],
            priority: 'MEDIUM',
            status: 'IN_PROGRESS',
            category: 'HR / IT',
            createdAt: new Date(Date.now() - 86400000),
            updatedAt: new Date(Date.now() - 3600000 * 5),
            slaDue: new Date(Date.now() + 86400000 * 2),
            remark: '',
            tags: ['Onboarding']
        },
        {
            id: 't3',
            number: 'TIC-1003',
            title: 'Database Performance Degradation',
            description: 'SQL queries taking much longer than usual on the production dashboard.',
            user: this.users[2],
            assignee: this.users[3],
            priority: 'URGENT',
            status: 'SLA_BREACHED',
            category: 'Database',
            createdAt: new Date(Date.now() - 3600000 * 24),
            updatedAt: new Date(Date.now() - 3600000 * 10),
            slaDue: new Date(Date.now() - 3600000 * 2),
            remark: ''
        }
    ];

    private statsSubject = new BehaviorSubject<TicketStats>({
        open: 45,
        inProgress: 12,
        resolved: 156,
        slaBreached: 3,
        closed: 142,
        pending: 8
    });
    stats$ = this.statsSubject.asObservable();

    getTickets(): Observable<TicTicket[]> {
        return of(this.tickets);
    }

    getTicketById(id: string): Observable<TicTicket | undefined> {
        return of(this.tickets.find(t => t.id === id));
    }

    getStats(): Observable<TicketStats> {
        return this.stats$;
    }
}
