import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Todo } from './todo.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TodoService {

  private todosUrl = 'api/todos';
  private headers: Headers = new Headers({ 'Content-Type': 'application/json' });

  private nextTodoId: number = 0;

  constructor(private http: Http) {}

  public getTodos(): Observable<Todo[]> {

    return this.http.get(this.todosUrl)
      .map(response => response.json().data as Todo[]);

  }

  public getTodo(id: number): Observable<Todo> {
    
    const url = `${this.todosUrl}/${id}`;
    return this.http.get(url)
      .map(response => response.json().data as Todo);

  }

  public addTodo(todoText: string): Observable<Todo> {
    
    this.nextTodoId++;
    const todo = {
      id: this.nextTodoId,
      text: todoText,
      completed: false
    };

    return this.http.post(this.todosUrl, JSON.stringify(todo), this.headers)
      .map(() => todo);

  }

  public toggleTodo(todo: Todo): Observable<Todo> {

    const url = `${this.todosUrl}/${todo.id}`;
    return this.http
      .put(url, JSON.stringify(todo), this.headers)
      .map(() => todo);

  }

  public deleteTodo(id: number): Observable<any> {

    const url = `${this.todosUrl}/${id}`;
    return this.http.delete(url);

  }

  public updateTodo(todo: Todo): Observable<Todo> {
    
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, JSON.stringify(todo), this.headers)
      .map(() => todo);

  }

}
