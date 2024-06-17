import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { CreateEditTicketComponent } from './create-edit-ticket/create-edit-ticket.component';
// import { TicketingComponent } from './ticketing/ticketing.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { AllFeatureComponent } from './all-feature/all-feature.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TicketListComponent,
    CreateEditTicketComponent,
//     TicketingComponent,
//     DashboardComponent,
//     AllFeatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
