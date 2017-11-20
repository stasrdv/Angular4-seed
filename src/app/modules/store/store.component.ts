import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ItemModel } from "../item/shared/models/item.model";


@Component({
    selector: 'store',
    styleUrls: ['./store.component.scss'],
    templateUrl: './store.component.html'
})

export class StoreComponent {

    @Input()
    storeType: string;

    @Input()
    items: Array<ItemModel>;

    @Output() 
    onItemSold: EventEmitter<any> = new EventEmitter<any>();

    itemSold(item): void{
        this.onItemSold.emit(item);
    }
}