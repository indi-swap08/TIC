import { Base } from './base.model';
import { TicUser } from './user.model';

export interface TicTicket extends Base {
  user: TicUser; // Requester
  assignee?: TicUser;
  number: string;
  title: string;
  description: string;
  remark: string;
  priority: TicketPriority;
  status: TicketStatus;
  category: string;
  slaDue?: Date | string;
  resolutionDate?: Date | string;
  createdAt: Date | string;
  updatedAt: Date | string;
  tags?: string[];
  comments?: TicketComment[];
  activities?: TicketActivity[];
}

export interface TicketComment {
  id: string;
  user: TicUser;
  content: string;
  createdAt: Date | string;
  isInternal: boolean;
  attachments?: string[];
}

export interface TicketActivity {
  id: string;
  user: TicUser;
  action: string;
  timestamp: Date | string;
  details?: string;
}

export type TicketPriority = 'URGENT' | 'HIGH' | 'MEDIUM' | 'LOW';
export type TicketStatus = 'NEW' | 'OPEN' | 'IN_PROGRESS' | 'RESOLVED' | 'CLOSED' | 'SLA_BREACHED';
