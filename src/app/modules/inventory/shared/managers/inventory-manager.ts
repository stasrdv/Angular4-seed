import { Injectable } from "@angular/core";

import { InventoryModel } from "../models/inventory.model";
import { ItemModel } from "../../../item/shared/models/item.model";

@Injectable()
export class InventoryManager {

    public addItem(inventory: InventoryModel, item: ItemModel): void {
        inventory.items.push(item);
    }

    public removeItem(inventory: InventoryModel, item: ItemModel): void {
        let index = inventory.items.indexOf(item);
        if (index >= 0) {
            inventory.items.splice(index, 1);
        }
    }
}