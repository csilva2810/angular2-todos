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
var todo_service_1 = require("../todo.service");
var TodoFormComponent = (function () {
    function TodoFormComponent(todoService) {
        this.todoService = todoService;
        this.onAddTodo = new core_1.EventEmitter();
        this.todoText = '';
    }
    TodoFormComponent.prototype.ngOnInit = function () {
    };
    TodoFormComponent.prototype.onSubmit = function (event) {
        event.preventDefault();
        if (this.todoText.trim()) {
            this.onAddTodo.emit(this.todoText);
            this.todoText = '';
        }
    };
    return TodoFormComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TodoFormComponent.prototype, "onAddTodo", void 0);
TodoFormComponent = __decorate([
    core_1.Component({
        selector: 'todo-form',
        templateUrl: './todo-form.component.html'
    }),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoFormComponent);
exports.TodoFormComponent = TodoFormComponent;
//# sourceMappingURL=todo-form.component.js.map