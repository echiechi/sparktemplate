import { Ownership } from "./Ownership";

export class Shop{
    public id : number = null;
    public name: string;
    public imageName: string;
    public country: string;
    public city: string;
    public keyWords: string;
    public description: string;
    public ownership: Ownership;
}