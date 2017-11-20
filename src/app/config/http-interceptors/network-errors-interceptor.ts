/**
 * Network errors Interceptor
 * 
 * use it only for network errors
 */

import { Injectable, ErrorHandler } from "@angular/core";
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import "rxjs/add/observable/throw";


@Injectable()
export class NetworkErrorsInterceptor implements HttpInterceptor {

    constructor(private errorHandler: ErrorHandler) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(req)
            .catch((err: any, obs: Observable<any>) => {
                return Observable.throw(err);
            });
    }
}