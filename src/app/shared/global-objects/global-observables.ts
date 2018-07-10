/**
 * This file contain only observables for other components to subscribe and call.
 * make sure you unsubscribe on component destroy
 */

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class GlobalObservables {

    itemBoughtObservable = new Subject<any>();
}