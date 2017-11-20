export class walletModel {
    owner: string;
    budget: number;

    constructor(_owner: string, _budget: number){
        this.owner = _owner;
        this.budget = _budget;
    }
}