import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  /* atributo  variable de clase, cuando mi componente se inicializa eso se ejecuta*/
  items = this.cartService.getItems();

  constructor(
    private cartService: CartService,
  ){}
}
