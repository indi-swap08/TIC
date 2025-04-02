import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import {TicketModule} from "./ticket/ticket.module";
import {AngularMaterialModule} from './angular-material.module';
import {DragComponent} from './drag/drag.component';
import {CdkDrag, CdkDropList, CdkDropListGroup} from '@angular/cdk/drag-drop';
import {TreeComponent} from './tree/tree.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DragComponent,
    TreeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TicketModule,
    AngularMaterialModule,
    CdkDropListGroup,
    CdkDrag,
    CdkDropList
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
