import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isEmpty, isNil, reject } from 'ramda';
import {ConfigService} from "../../util/config/config.service";
import {Ticket, TicketDto, TicketProperty, TicketQuery, TicketUpdateDto} from "../model/ticket.model";

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private APIS = {
    search: (contextPath = this.configService.config.backend.contentPath, version = 'v1') => `${contextPath}/${version}/location`,
    create: (contextPath = this.configService.config.backend.contentPath, version = 'v1') => `${contextPath}/${version}/location`,
    remove: (id: any, contextPath = this.configService.config.backend.contentPath, version = 'v1') => `${contextPath}/${version}/location/${id}`,
    typeahead: (contextPath = this.configService.config.backend.contentPath, version = 'v1') => `${contextPath}/${version}/location`,
    patch: (id: any, contextPath = this.configService.config.backend.contentPath, version = 'v1') => `${contextPath}/${version}/location/${id}`,
  };

  // TODO: Error handling
  // TODO: Loading indicators
  constructor(private http: HttpClient, private configService: ConfigService) {}

  search$(searchDto: TicketQuery): Observable<Ticket[]> {
    const url = this.APIS.search();
    // remove all null / undefined from object, since they would be serialized as "null" / "undefined"
    const searchDtoFiltered = reject(isEmpty, reject(isNil, searchDto));
    const params = new HttpParams({ fromObject: searchDtoFiltered });
    return this.http.get<Ticket[]>(url, { params });
  }

  create$(newTicket: TicketDto): Observable<Ticket> {
    const url = this.APIS.create();
    return this.http.post<Ticket>(url, newTicket);
  }

  removeById$(id: string): Observable<Ticket> {
    const url = this.APIS.remove(id);
    return this.http.delete<Ticket>(url);
  }

  typeahead$(property: TicketProperty, searchVal: string): Observable<Ticket[]> {
    const url = this.APIS.typeahead();
    // adding '' So that typeahead displays options after filter clear
    const params = new HttpParams().append(property, searchVal || '');
    return this.http.get<Ticket[]>(url, { params });
  }

  patchById$(update: TicketUpdateDto): Observable<Ticket> {
    const url = this.APIS.patch(update.id);
    return this.http.put<Ticket>(url, update);
  }
}
