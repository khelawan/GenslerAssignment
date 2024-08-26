import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedDataService {
  categorySelected = new BehaviorSubject<any>('Computer');
  cartData: any = [];
  cartCount = new BehaviorSubject<any>(0);
  cartProductDetails = new BehaviorSubject<any>("");

  constructor() { }


  //service file to pass data between components.
  setSelectedCategory(value: string) {  
    this.categorySelected.next(value); // we are setting the category the use has selected
  }

  getSelecteddCategory() {
    return this.categorySelected.asObservable(); //if we need to fetch which category user has selected we can call tis function
  }

  addProductToCart(value: any) {    // adding all the products user has selected into the cart
    this.cartData.push(value);
    this.cartProductDetails.next(this.cartData);
    this.cartCount.next(this.cartData.length);  //  the number of items in the cart

  }

  getCartDetails() {
    return this.cartProductDetails.asObservable();  
  }

  getCartCount() {
    return this.cartCount.asObservable();  // to fetch card count
  }
}
