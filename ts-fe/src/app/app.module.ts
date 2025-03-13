import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverviewComponent } from './ticket/overview/overview.component';
import { CreateEditTicketComponent } from './create-edit-ticket/create-edit-ticket.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatChipsModule} from "@angular/material/chips";
import {ReactiveFormsModule} from "@angular/forms";
import {TicketModule} from "./ticket/ticket.module";
// import { TicketingComponent } from './ticketing/ticketing.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { AllFeatureComponent } from './all-feature/all-feature.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CreateEditTicketComponent,
//     TicketingComponent,
//     DashboardComponent,
//     AllFeatureComponent
  ],
  imports: [
    TicketModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
