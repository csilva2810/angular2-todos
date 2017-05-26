import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent }  from './app.component';

import { TodoService } from './todo/todo.service';
import { TodoResolver } from './todo/todo-resolver.service';
 
import { TodosComponent } from './todo/todos.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoFormComponent } from './todo/todo-form/todo-form.component';
import { TodoDetailComponent } from './todo/todo-detail/todo-detail.component';
import { TodoFilterComponent } from './todo/todo-filter/todo-filter.component';
import { FilterButtonComponent } from './todo/todo-filter/filter-button/filter-button.component';

const routes: Routes = [
  { path: 'todos', component: TodosComponent },
  {
    path: 'todos/:id',
    component: TodoDetailComponent,
    resolve: {
      todo: TodoResolver
    }
  },
  { path: '', redirectTo: '/todos', pathMatch: 'full' }
];

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    TodosComponent,
    TodoListComponent,
    TodoFormComponent,
    TodoDetailComponent,
    TodoFilterComponent,
    FilterButtonComponent
  ],
  providers: [ TodoService, TodoResolver ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
