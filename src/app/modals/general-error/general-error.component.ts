import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from "@angular/material";

@Component({
    styleUrls: ['./general-error.component.scss'],
    templateUrl: './general-error.component.html'
})

export class GeneralErrorModalComponent implements OnInit {

    header: any;
    body: any;
    constructor(
        private dialogRef: MdDialogRef<GeneralErrorModalComponent>,
        @Inject(MD_DIALOG_DATA) private data: any 
    ){}

    close(): void{
        this.dialogRef.close();
    }

    ngOnInit(){
        this.header = this.data.header;
        this.body = this.data.body;
    }
}