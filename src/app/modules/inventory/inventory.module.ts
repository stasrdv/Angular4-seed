import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ItemModule } from "../item/item.module";
import { GlobalObservables } from "../../shared/global-objects/global-observables";

import { InventoryManager } from "./shared/managers/inventory-manager";

import { InventoryComponent } from "./inventory.component";

@NgModule({
    imports: [
        CommonModule,
        ItemModule
    ],
    declarations: [
        InventoryComponent
    ],
    exports: [
        InventoryComponent
    ],
    providers: [
        InventoryManager,
        GlobalObservables
    ]
})

export class InventoryModule {
}