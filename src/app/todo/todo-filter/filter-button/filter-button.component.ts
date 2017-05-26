import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'filter-button',
  templateUrl: 'filter-button.component.html'
})
export class FilterButtonComponent implements OnInit {

  @Input() filter: string;
  @Input() activeFilter: string;
  @Output() onClick = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
    
  }

  filterClick(filter: string) {
    this.onClick.emit(filter);
  }

}
