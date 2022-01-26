import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  // CartService를 의존성으로 주입한다.
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {}

  // 장바구니 목록을 저장할 items 프로퍼티 정의
  items = this.cartService.getItems();

  // 사용자의 이름과 주소를 입력 받기 위해 FormBuilder group() 메서드로 name과 address 필드가 있는 폼 모델을 생성한 후 checkoutForm 프로퍼티에 할당
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  // 폼을 처리하는 onSubmit() 메서드를 정의. 이 메서드는 사용자가 입력한 이름과 주소를 제출하는 동작을 한다.
  // 그리고 이 메서드는 CartService clearCart() 메서드를 사용해서 폼을 초기화하고 장바구니를 비운다.
  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn(
      '고객님의 주문이 정상처리 되었습니다.',
      this.checkoutForm.value
    );
    this.checkoutForm.reset();
  }
}
