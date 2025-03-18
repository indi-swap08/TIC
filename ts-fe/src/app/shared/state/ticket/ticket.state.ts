import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';


import { catchError, map } from 'rxjs/operators';
import {Ticket, TicketQuery, TicketVisibleColumns} from "../../model/ticket.model";
import {HttpErrorResponse} from "@angular/common/http";
import {TicketAction} from "./ticket.action";
import {TicketService} from "../../service/ticket.service";
import {UserNotificationService} from "../../../util/user-notification/user-notification.service";
import {showErrorMsgToUser} from "../../../util/error-notification/errorNotification.util";

export class TicketStateModel {
  subject: string;
  description: string;
  query: TicketQuery;
  visibleColumns: TicketVisibleColumns[];
  formState: any;
  ticketError: HttpErrorResponse;
  loading: boolean;
}

@State<TicketStateModel>({
  name: 'locations',
  defaults: {
    subject: '',
    description: '',
    query: {},
    visibleColumns: ['ticketNumber', 'title', 'subject', 'description', 'status', 'priority', 'actions'],
    formState: null,
    ticketError: null,
    loading: false,
  },
})
@Injectable()
export class TicketState {
  constructor(private ticketService: TicketService, private userNotificationService: UserNotificationService) {}

  @Selector([TicketState])
  public static loading(state: TicketStateModel) {
    return state.loading;
  }
  @Selector([TicketState])
  static getVisibleColumns(state: TicketStateModel) {
    return state.visibleColumns;
  }

  @Selector([TicketState])
  static getFormState(state: TicketStateModel) {
    return state.formState;
  }

  @Action(TicketAction.Create, { cancelUncompleted: true })
  create({ patchState, getState }: StateContext<TicketStateModel>, { ticket }: TicketAction.Create) {
    const state = getState();
    return this.ticketService.create$(ticket).pipe(
      map((newLoc) => {
        // patchState({ locations: [...[newLoc], ...state.ticket], highlight: [...[newLoc]] });
      }),
      catchError((err) => {
        patchState({ locationError: err });
        showErrorMsgToUser(err, this.userNotificationService);
        throw err;
      })
    );
  }

  @Action(TicketAction.Remove)
  remove({ getState, patchState }: StateContext<TicketStateModel>, { ticket }: TicketAction.Remove) {
    const state = getState();
    return this.ticketService.removeById$(ticket.id).pipe(
      map((_) => {
        // patchState({ locations: [...state.locations.filter((currentLocation) => currentLocation.id !== location.id)] });
      }),
      catchError((err) => {
        // patchState({ locationError: err });
        showErrorMsgToUser(err, this.userNotificationService);
        throw err;
      })
    );
  }

  @Action(TicketAction.Search, { cancelUncompleted: true })
  search({ patchState }: StateContext<TicketStateModel>, { query }: TicketAction.Search) {
    // patchState({ locations: [], loading: true });
    return this.ticketService.search$(query).pipe(
      map((locations) =>
        patchState({
          query: query,
          // locations: [...locations],
          loading: false,
        })
      ),
      catchError((err) => {
        // patchState({ locationError: err, loading: false });
        showErrorMsgToUser(err, this.userNotificationService);
        throw err;
      })
    );
  }

  @Action(TicketAction.Update)
  update({ patchState, getState }: StateContext<TicketStateModel>, { ticket }: TicketAction.Update) {
    const state = getState();
    return this.ticketService.patchById$(ticket).pipe(
      map((editedLoc) => {
        patchState({
          // locations: [editedLoc, ...state.locations.filter((currentLoc) => currentLoc.id !== editedLoc.id)],
          // highlight: [editedLoc],
        });
      }),
      catchError((err) => {
        // patchState({ locationError: err });
        showErrorMsgToUser(err, this.userNotificationService);
        throw err;
      })
    );
  }

  // @Action(TicketAction.SaveFormState, { cancelUncompleted: true })
  // save({ patchState }: StateContext<TicketStateModel>, { formState }: TicketAction.SaveFormState) {
  //   return patchState({ formState });
  // }
}
