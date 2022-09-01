import { Component, OnInit } from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartComponent } from '../cart/cart.component';


@Component({
  providers: [CartComponent],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']

})
export class HeaderComponent implements OnInit {
  faCartShopping = faCartShopping;


  constructor(private comp: CartComponent) {}

  public callQuantity():void {
    this.comp.getTotalQuantity();
  }
   
  
  ngOnInit(): void {
    
  }

}
