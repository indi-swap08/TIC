import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-edit-ticket',
  templateUrl: './create-edit-ticket.component.html',
  styleUrls: ['./create-edit-ticket.component.scss']
})
export class CreateEditTicketComponent implements OnInit {
  ticketForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.ticketForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['medium', Validators.required],
      assignee: ['']
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.ticketForm.valid) {
      console.log(this.ticketForm.value);
      // Add your submission logic here
    }
  }
}
