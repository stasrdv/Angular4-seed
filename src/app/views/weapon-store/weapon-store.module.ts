import { NgModule } from "@angular/core";
import { StoreModule } from "../../modules/store/store.module";
import { InventoryModule } from "../../modules/inventory/inventory.module";
import { WalletModule } from "../../modules/wallet/wallet.module";
import { ModalManager } from "../../shared/managers/modal-manager";
import { routing } from "./weapone-store.routing";
import { GlobalObservables } from "../../shared/global-objects/global-observables";

import { WeaponStoreComponent } from "./weapon-store.component";


@NgModule({
    imports: [
        routing,
        StoreModule,
        InventoryModule,
        WalletModule
    ],
    declarations: [
        WeaponStoreComponent
    ],
    providers:[
        ModalManager,
        GlobalObservables
    ]
})
export class WeaponStoreModule { }