import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts', // 이 컴포넌트가 어떤 태그 이름으로 사용될지 결정
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  // ProductAlertsComponent 클래스 선언에 product 라는 프로퍼티를 선언하고 이 프로퍼티 앞에 @Input() 데코레이터를 지정한다.
  // 프로퍼티에 @Input() 데코레이터를 지정하면 해당 프로퍼티의 값을 부모 컴포넌트에서 받아온다는 것을 의미한다. 여기에서는 ProductListComponent가 부모 컴포넌트이다.
  @Input() productHello!: Product | undefined;

  // @Output() 데코레이터를 지정하면 ProductAlertsComponent가 notify 프로퍼티를 통해 이벤트를 보낼 수 있다.
  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
