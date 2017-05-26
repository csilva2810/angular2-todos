"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./in-memory-data.service");
var app_component_1 = require("./app.component");
var todo_service_1 = require("./todo/todo.service");
var todo_resolver_service_1 = require("./todo/todo-resolver.service");
var todos_component_1 = require("./todo/todos.component");
var todo_list_component_1 = require("./todo/todo-list/todo-list.component");
var todo_form_component_1 = require("./todo/todo-form/todo-form.component");
var todo_detail_component_1 = require("./todo/todo-detail/todo-detail.component");
var todo_filter_component_1 = require("./todo/todo-filter/todo-filter.component");
var filter_button_component_1 = require("./todo/todo-filter/filter-button/filter-button.component");
var routes = [
    { path: 'todos', component: todos_component_1.TodosComponent },
    {
        path: 'todos/:id',
        component: todo_detail_component_1.TodoDetailComponent,
        resolve: {
            todo: todo_resolver_service_1.TodoResolver
        }
    },
    { path: '', redirectTo: '/todos', pathMatch: 'full' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
            router_1.RouterModule.forRoot(routes)
        ],
        declarations: [
            app_component_1.AppComponent,
            todos_component_1.TodosComponent,
            todo_list_component_1.TodoListComponent,
            todo_form_component_1.TodoFormComponent,
            todo_detail_component_1.TodoDetailComponent,
            todo_filter_component_1.TodoFilterComponent,
            filter_button_component_1.FilterButtonComponent
        ],
        providers: [todo_service_1.TodoService, todo_resolver_service_1.TodoResolver],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map