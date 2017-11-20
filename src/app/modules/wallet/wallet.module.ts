import { NgModule } from '@angular/core';
import { WalletComponent } from "./wallet.component";
import { WalletManager } from "./shared/managers/wallet-manager";

@NgModule({
    declarations: [WalletComponent],
    exports: [WalletComponent],
    providers:[WalletManager]
})

export class WalletModule {
}