import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketDataService } from '../../shared/services/ticket-data.service';
import { TicTicket, TicketComment } from '../../shared/model/ticket.model';
import { Subscription, interval } from 'rxjs';

@Component({
    selector: 'app-ticket-detail',
    templateUrl: './ticket-detail.component.html',
    styleUrls: ['./ticket-detail.component.scss']
})
export class TicketDetailComponent implements OnInit, OnDestroy {
    ticket: TicTicket | undefined;
    newComment: string = '';
    isInternal: boolean = false;
    private subscription: Subscription = new Subscription();
    slaCountdown: string = '00:00:00';

    constructor(
        private route: ActivatedRoute,
        private dataService: TicketDataService
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.subscription.add(
                this.dataService.getTicketById(id).subscribe(ticket => {
                    this.ticket = ticket;
                    this.startSlaCountdown();
                })
            );
        }
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    startSlaCountdown() {
        if (!this.ticket?.slaDue) return;

        this.subscription.add(
            interval(1000).subscribe(() => {
                const now = new Date().getTime();
                const due = new Date(this.ticket!.slaDue!).getTime();
                const diff = due - now;

                if (diff < 0) {
                    this.slaCountdown = 'BREACHED';
                    return;
                }

                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);

                this.slaCountdown = `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
            })
        );
    }

    private pad(num: number): string {
        return num < 10 ? '0' + num : num.toString();
    }

    addComment() {
        if (!this.newComment.trim() || !this.ticket) return;

        const comment: TicketComment = {
            id: 'c' + Date.now(),
            user: { id: 'u4', firstName: 'Admin', lastName: 'User', email: 'admin@enterprise.com', username: 'admin' },
            content: this.newComment,
            createdAt: new Date(),
            isInternal: this.isInternal
        };

        if (!this.ticket.comments) this.ticket.comments = [];
        this.ticket.comments.push(comment);
        this.newComment = '';
    }

    getStatusClass(status: string): string {
        return status.toLowerCase().replace('_', '-');
    }

    getPriorityClass(priority: string): string {
        return priority.toLowerCase();
    }
}
