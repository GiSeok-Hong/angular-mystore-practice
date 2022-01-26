import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  // 장바구니 목록을 저장할 items 프로퍼티 정의
  items = this.cartService.getItems();

  // CartService를 의존성으로 주입한다.
  constructor(private cartService: CartService) {}

  ngOnInit() {}
}
