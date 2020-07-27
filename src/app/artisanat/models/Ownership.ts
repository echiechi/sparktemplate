import { Shop } from "./Shop";

export class Ownership {
    id : number;
    user: number;
    shop: Shop;
    type: string = "OWNER";
}