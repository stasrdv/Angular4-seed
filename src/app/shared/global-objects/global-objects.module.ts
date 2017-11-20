/**
 * Import here only global objects for app wide
 * 
 * consider to import it only in the modules who use it
 */

import { NgModule } from "@angular/core";

import { GlobalMethods } from "./global-methods";
import { GlobalObservables } from "./global-observables";
import "./global-regexes";
import "./global-variables";

@NgModule({
    providers: [
        GlobalMethods,
        GlobalObservables
    ]
})
export class GlobalObjectsModule { }