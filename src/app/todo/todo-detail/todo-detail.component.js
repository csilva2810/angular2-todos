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
var TodoDetailComponent = (function () {
    function TodoDetailComponent(todoService, route, router) {
        this.todoService = todoService;
        this.route = route;
        this.router = router;
    }
    TodoDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // getting the todo passed from the resolver
        this.route.data
            .subscribe(function (data) { return _this.todo = data.todo; });
    };
    TodoDetailComponent.prototype.goBack = function () {
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    TodoDetailComponent.prototype.deleteTodo = function (id) {
        var _this = this;
        this.todoService.deleteTodo(id).subscribe(function () { return _this.goBack(); });
    };
    TodoDetailComponent.prototype.onUpdate = function (event) {
        var _this = this;
        event.preventDefault();
        this.todoService.updateTodo(this.todo).subscribe(function () { return _this.goBack(); });
    };
    return TodoDetailComponent;
}());
TodoDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'todo-detail',
        templateUrl: 'todo-detail.component.html'
    }),
    __metadata("design:paramtypes", [todo_service_1.TodoService,
        router_1.ActivatedRoute,
        router_1.Router])
], TodoDetailComponent);
exports.TodoDetailComponent = TodoDetailComponent;
//# sourceMappingURL=todo-detail.component.js.map