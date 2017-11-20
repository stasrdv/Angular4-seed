import { Component, OnInit } from '@angular/core';
import { SpinnerManager } from "./shared/managers/spinner-manager";

@Component({
    selector: 'spinner',
    styleUrls: ['./spinner.component.scss'],
    templateUrl: './spinner.component.html'
})

export class SpinnerComponent implements OnInit {
    show: boolean = false;

    constructor(private spinnerManager: SpinnerManager) { }

    ngOnInit() {
        this.spinnerManager.spinnerObservable.subscribe(data => {
            this.show = data;
        });
    }
}