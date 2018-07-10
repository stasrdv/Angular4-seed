import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { citiesUrl, mockUrl } from "../global-objects/global-variables";
import { Observable } from "rxjs/Observable";


@Injectable()
export class GeneralService {


    constructor(private httpClient: HttpClient) { }

    getCities(params): Observable<any> {
        return this.httpClient.post(`${citiesUrl}GetCities`, { Prefix: params });
    }

    getMockJson(): Observable<any> {
        return this.httpClient.get(mockUrl);
    }

    getErrorExample(): Observable<any>{
        return this.httpClient.get(mockUrl + 'error');
    }
}