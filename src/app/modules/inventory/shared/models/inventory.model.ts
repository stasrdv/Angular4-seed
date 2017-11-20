import { ItemModel } from "../../../item/shared/models/item.model";

export class InventoryModel{
    owner: string;
    items: Array<ItemModel>;

    constructor(_owner: string, _items: Array<ItemModel>){
        this.owner = _owner;
        this.items = _items;
    }
}