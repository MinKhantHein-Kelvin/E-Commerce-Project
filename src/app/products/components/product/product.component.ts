import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product : any = [];
  @Output() item = new EventEmitter();
  addButton : boolean = false;
  amount : number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(){
    this.item.emit({item : this.product , quantity : this.amount});
  }

}
