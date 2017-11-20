import { Component, OnInit, Inject } from "@angular/core";
import { MdDialogRef, MD_DIALOG_DATA } from "@angular/material";

@Component({
    templateUrl: './no-money.component.html',
    styleUrls: ['./no-money.component.scss']
})

export class NoMoneyModalComponent implements OnInit {

    owner: string;
    constructor(
        public dialogRef: MdDialogRef<NoMoneyModalComponent>,
        @Inject(MD_DIALOG_DATA) public data: any,
    ){}

    close(): void{
        this.dialogRef.close();
    }

    ngOnInit() {
       this.owner = this.data.owner;
    }
}