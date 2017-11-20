import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StoreComponent } from "./store.component";
import { ItemModule } from "../item/item.module";

@NgModule({
    imports:[
        CommonModule,
        ItemModule
    ],
    declarations: [
        StoreComponent
    ],
    exports:[
        StoreComponent
    ]
})

export class StoreModule{}