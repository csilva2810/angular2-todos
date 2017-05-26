import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Injectable()
export class TodoResolver implements Resolve<Todo> {

  constructor(private todoService: TodoService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<Todo>{

    return this.todoService.getTodo(route.params.id);

  }

}
