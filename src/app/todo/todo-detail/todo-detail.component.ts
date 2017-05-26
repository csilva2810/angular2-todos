import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  moduleId: module.id,
  selector: 'todo-detail',
  templateUrl: 'todo-detail.component.html'
})
export class TodoDetailComponent implements OnInit {

  public todo: Todo;
  
  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // getting the todo passed from the resolver
    this.route.data
      .subscribe((data: {todo: Todo}) => this.todo = data.todo);
  }

  goBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe(() => this.goBack());
  }

  onUpdate(event: Event) {
    event.preventDefault();
    this.todoService.updateTodo(this.todo).subscribe(() => this.goBack());
  }

}
