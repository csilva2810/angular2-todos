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
var todo_service_1 = require("./todo.service");
var TodosComponent = (function () {
    function TodosComponent(todoService) {
        this.todoService = todoService;
        this.todos = [];
    }
    TodosComponent.prototype.getTodos = function () {
        var _this = this;
        this.todoService.getTodos()
            .subscribe(function (todos) { return _this.todos = todos; });
    };
    TodosComponent.prototype.addTodo = function (todoText) {
        var _this = this;
        this.todoService.addTodo(todoText)
            .subscribe(function (todo) { return _this.todos.push(todo); });
    };
    TodosComponent.prototype.onToggle = function (todo) {
        this.todoService.toggleTodo(todo);
    };
    TodosComponent.prototype.onFilter = function (filter) {
        var _this = this;
        switch (filter) {
            case 'COMPLETED':
                this.todoService.getTodos()
                    .subscribe(function (todos) {
                    _this.todos = todos.filter(function (todo) { return todo.completed; });
                });
                break;
            case 'UNCOMPLETED':
                this.todoService.getTodos()
                    .subscribe(function (todos) {
                    _this.todos = todos.filter(function (todo) { return !todo.completed; });
                });
                break;
            default:
                this.getTodos();
                break;
        }
    };
    TodosComponent.prototype.ngOnInit = function () {
        this.getTodos();
    };
    return TodosComponent;
}());
TodosComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'todos',
        templateUrl: 'todos.component.html'
    }),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodosComponent);
exports.TodosComponent = TodosComponent;
//# sourceMappingURL=todos.component.js.map