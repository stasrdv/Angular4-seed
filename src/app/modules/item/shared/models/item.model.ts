export class ItemModel{
    id: number;
    name: string;
    cost: number;
    imgSrc: string;

    constructor(_id: number, _name: string, _cost: number, _imgSrc: string){
        this.id = _id;
        this.name = _name;
        this.cost = _cost;
        this.imgSrc = _imgSrc;
    }
}