import { signal } from "@angular/core";
import { Productos } from "../models/productos";

export class Variables{
    productos = signal<Productos[]>([]);
    categias = signal<string[]>([]);
    productosCategoria = signal<Productos[]>([])
}