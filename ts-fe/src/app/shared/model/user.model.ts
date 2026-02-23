import {Base} from './base.model';

export interface TicUser extends Base{
  username: string;
  email: string;
  firstName: string;
  lastName: string;
}
