import { Inject, Injectable } from '@angular/core';
import { StackMaterialProperties } from '../../stockyard/model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TicketBackendService {
  constructor(private http: HttpClient) {}

  save(ticket: Ticket) {
    return this.http.post<void>(`http://localhost:8080/api/tickets`, ticket);
  }
}
