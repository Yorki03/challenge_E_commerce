import { Rating } from "../interface/rating.interface";

export class Productos{
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;

    constructor(data: any){
        this.id = data.id;
        this.title = data.title;
        this.price = data.price;
        this.description = data.description;
        this.category = data.category;
        this.image = data.image;
        this.rating = data.rating;
    }
}

export interface IProductos extends Productos{
    cantidad: number;
}