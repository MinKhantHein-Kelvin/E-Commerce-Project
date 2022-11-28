import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent implements OnInit {
  @Input() title : string = '';
  @Input() data : any[] = [];
  @Output() selectedValue = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  detectChanges(event){
    this.selectedValue.emit(event);
  }

}
