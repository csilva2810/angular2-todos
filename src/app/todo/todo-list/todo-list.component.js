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
var router_1 = require("@angular/router");
var todo_service_1 = require("../todo.service");
var TodoListComponent = (function () {
    function TodoListComponent(todoService, router) {
        this.todoService = todoService;
        this.router = router;
        this.onToggle = new core_1.EventEmitter();
    }
    TodoListComponent.prototype.ngOnInit = function () { };
    TodoListComponent.prototype.toggleTodo = function (todo) {
        todo.completed = !todo.completed;
        this.onToggle.emit(todo);
    };
    TodoListComponent.prototype.onSelect = function (id) {
        this.router.navigate(['/todos', id]);
    };
    return TodoListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], TodoListComponent.prototype, "todos", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TodoListComponent.prototype, "onToggle", void 0);
TodoListComponent = __decorate([
    core_1.Component({
        selector: 'todo-list',
        templateUrl: './todo-list.component.html'
    }),
    __metadata("design:paramtypes", [todo_service_1.TodoService, router_1.Router])
], TodoListComponent);
exports.TodoListComponent = TodoListComponent;
//# sourceMappingURL=todo-list.component.js.map