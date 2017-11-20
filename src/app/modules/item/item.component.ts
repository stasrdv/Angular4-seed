import { Component, Input} from '@angular/core';

import { ItemModel } from "./shared/models/item.model";

@Component({
    selector: 'item',
    styleUrls: ['./item.component.scss'],
    templateUrl: './item.component.html'
})

export class ItemComponent {

    @Input()
    item: ItemModel;
}