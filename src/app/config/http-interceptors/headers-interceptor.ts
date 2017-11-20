/**
 * Headers Interceptor
 * 
 * use it only for headers
 */

import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const reqAddHeaders = req.clone({setHeaders: {'Content-Type': 'application/json'}})

        return next.handle(reqAddHeaders);
    }
}