import { Component, Input } from '@angular/core';
import { GeneralService } from "../../shared/services/general.service";

@Component({
    selector: 'navbar',
    styleUrls: ['./navbar.component.scss'],
    templateUrl: './navbar.component.html'
})

export class NavbarComponent {

    cities: Array<any>;
    prefix: string;
    lastSearch: string;

    constructor(private generalService: GeneralService) { }

    getCities() {
        if (this.prefix != this.lastSearch) {
            this.generalService.getCities(this.prefix)
                .subscribe(res => {
                    if (res.Success) {
                        this.cities = res.Payload.lCities;
                        this.lastSearch = this.prefix;
                        console.log(this.cities);
                    }
                });
        }
    }

    getMockJson() {
        this.generalService.getMockJson()
            .subscribe(res => {
                console.log('Mock http call:', res);
            });
    }

    getErrorExample() {
        this.generalService.getErrorExample()
            .subscribe(res => {
                console.log(res);
            });
    }
}