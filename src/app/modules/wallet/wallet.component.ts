import { Component, Input } from '@angular/core';

import { walletModel } from "./shared/models/wallet.model";

@Component({
    selector: 'wallet',
    styleUrls: ['./wallet.component.scss'],
    templateUrl: './wallet.component.html'
})

export class WalletComponent {
    @Input()
    wallet: walletModel;
}