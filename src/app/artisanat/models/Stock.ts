import { Shop } from "./Shop";
import { Product } from "./Product";

export class Stock {
    id: number;
    shop: Shop;
    product = new Product();
    quantity;
}