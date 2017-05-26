import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { TodoService } from '../todo.service';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html'
})
export class TodoFormComponent implements OnInit {

  @Output() onAddTodo = new EventEmitter<any>();
  public todoText: string = '';

  constructor(private todoService: TodoService) {}

  ngOnInit() {

  }

  public onSubmit(event: Event) {
    event.preventDefault();
    if (this.todoText.trim()) {
      this.onAddTodo.emit(this.todoText);
      this.todoText = '';
    }
  }

}
