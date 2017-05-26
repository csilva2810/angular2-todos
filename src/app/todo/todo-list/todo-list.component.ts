import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit {

  @Input() todos: Todo[];
  @Output() onToggle = new EventEmitter();
  
  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit() {}

  toggleTodo(todo: Todo) {
    todo.completed = !todo.completed;
    this.onToggle.emit(todo);
  }

  onSelect(id: number) {
    this.router.navigate(['/todos', id]);
  }

}
