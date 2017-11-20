import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";

import { InventoryManager } from "./shared/managers/inventory-manager";
import { GlobalObservables } from "../../shared/global-objects/global-observables";

import { InventoryModel } from "./shared/models/inventory.model";
import { ItemModel } from "../item/shared/models/item.model";

@Component({
    selector: 'inventory',
    styleUrls: ['./inventory.component.scss'],
    templateUrl: './inventory.component.html'
})

export class InventoryComponent implements OnInit, OnDestroy {

    inventory: InventoryModel;
    itemBoughtSubscription: Subscription;

    constructor(
        private inventoryManager: InventoryManager,
        private globalObservables: GlobalObservables
    ) {
        this.inventory = new InventoryModel('raz', []);
    }

    addItemToInventory(item) {
        this.inventoryManager.addItem(this.inventory, item);
    }

    ngOnInit() {
       this.itemBoughtSubscription = this.globalObservables.itemBoughtObservable.subscribe((data) =>{
            if(data){
                this.addItemToInventory(data);
            }
        });
    }

    ngOnDestroy() {
        this.itemBoughtSubscription.unsubscribe();
    }
}