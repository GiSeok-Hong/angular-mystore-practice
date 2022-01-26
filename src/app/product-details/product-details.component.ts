import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  // ActivatedRoute는 Angular Router가 로드한 개별 컴포넌트에 대한 정보를 담고 있다. 이 객체를 참조하면 해당 컴포넌트가 표시될 때 사용된 라우팅 규칙이나 라우팅 인자를 확인할 수 있다.
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    // 현재 라우트에서 productId를 가져온다.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    //
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }

  // 이 메서드는 현재 사용자가 보는 상품을 장바구니에 추가하는 메서드이다.
  // 현재 product를 인자로 받는다. CartService addToCart() 메서드를 사용해서 인자로 받은 상품을 장바구니에 추가한다.
  // 장바구니에 상품이 추가되었다는 메시지를 화면에 표시한다.
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('고객님의 상품이 장바구니에 추가되었습니다.');
  }
}
