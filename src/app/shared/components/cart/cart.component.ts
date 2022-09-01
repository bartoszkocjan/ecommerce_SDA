import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';
import { Router } from '@angular/router';
import { faHandPointLeft, faMinus, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {

  products: any[] = [];
  base: number = 1;
  total: number = 0;
  totalQuantity: number = 0;
  myModal = false;

  constructor(private communication: CommunicationService, private router: Router) {

  }

  ngOnInit(): void {
    this.getProducts();
    this.getTotal();
    this.getTotalQuantity();
  }

  public getProducts(){
    const objProduct = JSON.parse(localStorage.getItem('cart') || '{}');
    // console.log(objProduct);
    this.products = objProduct;
  }

  changeAmount(base: number, item: any) {
    if (item.products.quantity + base < 1) {
      item.products.quantity === 1;
    } else {
      item.products.quantity += base;
    }
    this.getTotal();
  }

  deleteOrder(id: string) {
    this.products = this.products.filter((product: { id: string; }) => product.id !== id)
    this.getTotal();
  }

  modal() {
    this.myModal = !this.myModal
  }

  closeModal(e: boolean) {
    this.myModal = e;
  }
  changeView() {
    this.router.navigate(['products']);
  }

  decreaseOneItem(item: any) {
    this.products = this.products.map((el) => {
      if (el.id === item.id && el.products.quantity > 1) {
        el.products.quantity--
      }
      return el
    })
    this.getTotal()
    this.getTotalQuantity()
  }
  increaseOneItem(item: any) {
    this.products = this.products.map((el) => {
      if (el.id === item.id) {
        el.products.quantity++
      } else if (el.id === item.id && el.products.quantity <= 1) {
        let index = this.products.indexOf(item)
        this.products.splice(index, 1)
      }
      return el
    })
    this.getTotal()
    this.getTotalQuantity()
  }
  deleteItem(item: any) {
    let index = this.products.indexOf(item)
    this.products.splice(index, 1)
    this.getTotal()
    this.getTotalQuantity()
  }

  public getTotal() {
    this.total = this.products
      .map(item => item.products.quantity * item.products.price)
      .reduce((acc, item) => acc += item, 0)
  }

  public getTotalQuantity(){
    this.totalQuantity = this.products
    .map(item => item.products.quantity)
    .reduce((acc, item) => acc += item, 0)
  }


  faHandPointLeft = faHandPointLeft;
  faMinus = faMinus;
  faPlus = faPlus;
  faTrashAlt = faTrashAlt;
}