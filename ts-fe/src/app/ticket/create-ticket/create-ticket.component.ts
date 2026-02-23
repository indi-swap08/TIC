import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Editor, Toolbar } from 'ngx-editor';

@Component({
    selector: 'app-create-ticket',
    templateUrl: './create-ticket.component.html',
    styleUrls: ['./create-ticket.component.scss']
})
export class CreateTicketComponent implements OnInit, OnDestroy {
    editor!: Editor;
    toolbar: Toolbar = [
        ['bold', 'italic'],
        ['underline', 'strike'],
        ['code', 'blockquote'],
        ['ordered_list', 'bullet_list'],
        [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
        ['link', 'image'],
        ['text_color', 'background_color'],
        ['align_left', 'align_center', 'align_right', 'align_justify'],
    ];

    ticket = {
        title: '',
        description: '',
        category: '',
        priority: 'MEDIUM',
        attachments: [] as File[]
    };

    categories = ['Hardware', 'Software', 'Network', 'Access Management', 'HR / Payroll', 'Other'];
    priorities = [
        { value: 'LOW', label: 'Low', icon: 'arrow_downward' },
        { value: 'MEDIUM', label: 'Medium', icon: 'remove' },
        { value: 'HIGH', label: 'High', icon: 'arrow_upward' },
        { value: 'URGENT', label: 'Urgent', icon: 'priority_high' }
    ];

    constructor(public dialogRef: MatDialogRef<CreateTicketComponent>) { }

    ngOnInit(): void {
        this.editor = new Editor();
    }

    ngOnDestroy(): void {
        this.editor.destroy();
    }

    onFileSelected(event: any) {
        const files = event.target.files;
        if (files) {
            for (let i = 0; i < files.length; i++) {
                this.ticket.attachments.push(files[i]);
            }
        }
    }

    removeAttachment(index: number) {
        this.ticket.attachments.splice(index, 1);
    }

    onSubmit() {
        if (this.ticket.title && this.ticket.description) {
            this.dialogRef.close(this.ticket);
        }
    }

    onCancel() {
        this.dialogRef.close();
    }
}
