import {TicketQuery, Ticket, TicketDto, TicketUpdateDto} from "../../model/ticket.model";

export namespace TicketAction {
  export class Search {
    static readonly type = '[TICKET] Search for Ticket';
    constructor(public query: TicketQuery) {}
  }

  export class Remove {
    static readonly type = '[TICKET] Remove Ticket';
    constructor(public ticket: Ticket) {}
  }

  export class Create {
    static readonly type = '[TICKET] Create Ticket';
    constructor(public ticket: TicketDto) {}
  }

  export class Update {
    static readonly type = '[TICKET] Update location';
    constructor(public ticket: TicketUpdateDto) {}
  }
}
