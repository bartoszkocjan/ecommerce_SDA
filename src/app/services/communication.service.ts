import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

 // constructor() { }
  trigger = new BehaviorSubject({});
  triggerObservable = this.trigger.asObservable();

  sendCart(cart: any) {
    this.trigger.next(cart);
  }
}
