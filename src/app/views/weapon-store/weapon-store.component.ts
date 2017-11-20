import { Component } from '@angular/core';

import { ItemModel } from "../../modules/item/shared/models/item.model";
import { walletModel } from "../../modules/wallet/shared/models/wallet.model";

import { WalletManager } from "../../modules/wallet/shared/managers/wallet-manager";
import { ModalManager } from "../../shared/managers/modal-manager";
import { ModalDataModel } from "../../modals/shared/models/modalData.model";

import { GlobalObservables } from "../../shared/global-objects/global-observables";
import { NoMoneyModalComponent } from "../../modals/no-money/no-money.component";

@Component({
    styleUrls: ['./weapon-store.component.scss'],
    templateUrl: './weapon-store.component.html'
})

export class WeaponStoreComponent {

    items: Array<ItemModel>;
    wallet: walletModel;

    constructor(
        private walletManager: WalletManager,
        private modalManager: ModalManager,
        private globalObservables: GlobalObservables
    ) {
        this.items = [
            new ItemModel(1, 'Longsword', 100, 'assets/weapons/longSword.jpg'),
            new ItemModel(2, 'Longbow', 150, 'assets/weapons/longbow.jpg'),
            new ItemModel(3, 'Shotbow', 75, 'assets/weapons/shortBow.jpg'),
            new ItemModel(4, 'Mace', 400, 'assets/weapons/mace.png'),
            new ItemModel(5, 'Spear', 350, 'assets/weapons/spear.png')
        ]
        this.wallet = new walletModel('Alexander the great', 1000);
    }


    itemSold(item: ItemModel): void {
        let soldItem = this.items.find(obj => obj.id == item.id);
        let success = this.chargeWallet(item.cost);
        if (success) {
            this.delteItemFormItemsList(soldItem);
            this.notifyItemSold(item);
        }
    }

    testOpen(data) {
        console.log(`open ${data}`);
    }

    testClose(data): any {
        console.log(`closed ${data}`);
    }

    chargeWallet(amount): boolean {
        let success = this.walletManager.chargeWallet(this.wallet, amount);
        if (!success) {
            let componentData: ModalDataModel = new ModalDataModel(
                NoMoneyModalComponent,
                {
                    data: {
                        owner: this.wallet.owner
                    },
                    width: '30%',
                    height: '15%'
                },
                this.testOpen,
                this.testClose
            )
            this.modalManager.open(componentData);
        }
        return success;
    }

    delteItemFormItemsList(item) {
        let index = this.items.indexOf(item);
        this.items.splice(index, 1);
    }

    notifyItemSold(item) {
        this.globalObservables.itemBoughtObservable.next(
            item
        );
    }
}