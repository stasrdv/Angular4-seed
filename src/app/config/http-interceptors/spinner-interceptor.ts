/**
 * Spinner Interceptor
 * 
 * use it only for the spinner actions
 */

import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { SpinnerManager } from "../../modules/spinner/shared/managers/spinner-manager";
import 'rxjs/add/operator/do';
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {

    constructor(private spinnerManager: SpinnerManager) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(req).do(event => {
            if (event instanceof HttpResponse) {
                if (event.status == 200) {
                    this.spinnerManager.removeXHR();
                }
            }
            else {
                this.spinnerManager.addXHR(req);
            }
        })
            .catch((err: any, obs: Observable<any>) => {
                this.spinnerManager.forceClose();
                return Observable.throw(err);
            });
    }
}
