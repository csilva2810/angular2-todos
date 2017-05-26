"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var TodoService = (function () {
    function TodoService(http) {
        this.http = http;
        this.todosUrl = 'api/todos';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.nextTodoId = 0;
    }
    TodoService.prototype.getTodos = function () {
        return this.http.get(this.todosUrl)
            .map(function (response) { return response.json().data; });
    };
    TodoService.prototype.getTodo = function (id) {
        var url = this.todosUrl + "/" + id;
        return this.http.get(url)
            .map(function (response) { return response.json().data; });
    };
    TodoService.prototype.addTodo = function (todoText) {
        this.nextTodoId++;
        var todo = {
            id: this.nextTodoId,
            text: todoText,
            completed: false
        };
        return this.http.post(this.todosUrl, JSON.stringify(todo), this.headers)
            .map(function () { return todo; });
    };
    TodoService.prototype.toggleTodo = function (todo) {
        var url = this.todosUrl + "/" + todo.id;
        return this.http
            .put(url, JSON.stringify(todo), this.headers)
            .map(function () { return todo; });
    };
    TodoService.prototype.deleteTodo = function (id) {
        var url = this.todosUrl + "/" + id;
        return this.http.delete(url);
    };
    TodoService.prototype.updateTodo = function (todo) {
        var url = this.todosUrl + "/" + todo.id;
        return this.http.put(url, JSON.stringify(todo), this.headers)
            .map(function () { return todo; });
    };
    return TodoService;
}());
TodoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map