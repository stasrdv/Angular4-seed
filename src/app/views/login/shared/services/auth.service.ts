import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
    isLoggedIn = false;
    username: string = 'alexander';
    password: string = '1234';

    redirectUrl: string = '/weapon-store';

    login(_username: string, _password: string): Observable<boolean> {

        let result = (this.username == _username && this.password == _password);
        this.isLoggedIn = result;
        return Observable.of(result).delay(1000).do(val => {
            this.isLoggedIn = val;
        });
    }

    logout(): void {
        this.isLoggedIn = false;
    }
}