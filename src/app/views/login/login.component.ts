import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    message: string;

    constructor(public authService: AuthService, public router: Router) {
        this.setMessage();
    }

    setMessage() {
        this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    }

    login(username: string, password: string) {
        this.message = 'Trying to log in ...';

        this.authService.login(username, password).subscribe(val => {
            this.setMessage();
            if (this.authService.isLoggedIn) {

                // Redirect the user
                this.router.navigate([this.authService.redirectUrl]);
            }
        });
    }

    logout() {
        this.authService.logout();
        this.setMessage();
    }
}