import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { TodoService } from '../todo.service';

@Component({
  moduleId: module.id,
  selector: 'todo-filter',
  templateUrl: 'todo-filter.component.html'
})
export class TodoFilterComponent implements OnInit {

  @Output() onFilter = new EventEmitter();
  filter: string = 'ALL';
  
  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  setFilter(filter: string) {
    this.filter = filter;
    this.onFilter.emit(filter);
  }
  
}
