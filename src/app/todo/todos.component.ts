import { Component, OnInit } from '@angular/core';

import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Component({
  moduleId: module.id,
  selector: 'todos',
  templateUrl: 'todos.component.html'
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  private getTodos() {
    this.todoService.getTodos()
      .subscribe(todos => this.todos = todos);
  }

  addTodo(todoText: string) {
    this.todoService.addTodo(todoText)
      .subscribe(todo => this.todos.push(todo));
  }

  onToggle(todo: Todo) {
    this.todoService.toggleTodo(todo);
  }

  onFilter(filter: string) {

    switch (filter) {
      case 'COMPLETED':
        this.todoService.getTodos()
          .subscribe(todos => {
            this.todos = todos.filter(todo => todo.completed);
          });
        break;  
      case 'UNCOMPLETED':
        this.todoService.getTodos()
          .subscribe(todos => {
            this.todos = todos.filter(todo => !todo.completed);
          });
        break;
      default:
        this.getTodos();
        break;
    }

  }

  ngOnInit() {
    this.getTodos();
  }

}
