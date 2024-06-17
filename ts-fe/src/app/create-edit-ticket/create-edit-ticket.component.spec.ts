import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditTicketComponent } from './create-edit-ticket.component';

describe('CreateEditTicketComponent', () => {
  let component: CreateEditTicketComponent;
  let fixture: ComponentFixture<CreateEditTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEditTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
