import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // items 프로퍼티 정의. 이 프로퍼티는 장바구니에 담긴 상품을 저장하는 배열이다.
  items: Product[] = [];

  // 장바구니에 상품을 추가하는 메서드 - items 배열에 상품을 추가한다.
  addToCart(product: Product) {
    this.items.push(product);
  }

  // 장바구니에 담긴 상품 목록을 반환하는 메서드 - 장바구니에 담긴 상품을 갯수와 함께 반환한다.
  getItems() {
    return this.items;
  }

  // 장바구니를 비우는 메서드 - 장바구니를 비우고 빈 배열을 반환
  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() {}
}
