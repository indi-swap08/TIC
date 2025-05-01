import {Base} from './base.model';
import {TicUser} from './user.model';

export interface TicTicket extends Base{
  user: TicUser;
  number: string;
  title: string;
  description: string;
  remark: string;
  priority: TicketPriority;
  status: TicketStatus;
  resolutionDate?: Date | string;
}

export type TicketPriority = 'URGENT' | 'HIGH' | 'MEDIUM' | 'LOW';
export type TicketStatus = 'PENDING' | 'OPEN' | 'IN_PROGRESS' | 'RESOLVED'| 'CLOSED';
