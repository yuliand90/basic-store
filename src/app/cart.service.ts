import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
/*interfaz de productos crear una lista, atributo de clase una variable llamdas item */
  items: Product[] = [];
  constructor() { }
  /*metodo para agregar al carrito guardar el item*/
  addToCart(product: Product){
    this.items.push(product);
  }
  /*metodo retornar el array estado actual */
getItems(){
  return this.items;
}
/*metodo para borrar el array limpiar el carrito*/
clearCart() {
  this.items =[];
  return this.items;
}
}
