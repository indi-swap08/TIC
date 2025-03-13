import {BaseResponse} from "./base-response.model";
import {TicketPriority, TicketStatus} from "./enum/Ticket.enum";

export interface Ticket {
    ticketNumber: string;
    title: string;
    subject: string;
    description: string;
    status: TicketStatus,
    priority: TicketPriority,
}



// interface for database metadata
// tslint:disable-next-line:no-empty-interface
export interface MetaTicket extends BaseResponse {}

// interface for typeahead inputs that are selected
export type TicketDto = Omit<Ticket, keyof MetaTicket>;

export type TicketUpdateDto = Partial<TicketDto> & { id: string };

// interface for query object
export type TicketQuery = Partial<TicketDto>;

// type for visible columns
// 'actions' column is used for interactions
export type TicketVisibleColumns = keyof Ticket | 'actions';
export type TicketProperty = keyof Ticket;
