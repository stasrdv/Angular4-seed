/**
 * This file contain only observables for other components to subscribe and call.
 * make sure you unsubscribe on component destroy
 */

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class GlobalObservables {

    itemBoughtObservable: BehaviorSubject<any> = new BehaviorSubject<any>(false);
}