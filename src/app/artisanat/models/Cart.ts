import { Product } from "./Product";

export class CartEntry {
    stockId:number;
    product: Product;
    quantity: number;
    maxQuantity: number;
    shop: number;
}
