import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';
//input capturar los datos
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
  //mi padre  product-list.component.ts va poder acceder a mi información con el Output, notify es una instancia de un objeto, emitir eventos

}
