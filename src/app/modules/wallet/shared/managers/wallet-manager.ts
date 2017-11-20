import { Injectable} from "@angular/core";

import { walletModel } from "../models/wallet.model";

@Injectable()
export class WalletManager{

    public addMoney(wallet, amount): void {
        wallet.budget += amount;
        
    }

    public chargeWallet(wallet, amount): boolean {
        if (wallet.budget - amount >= 0) {
            wallet.budget -= amount;
            return true;
        }
        else{
            return false;
        }
    }
}