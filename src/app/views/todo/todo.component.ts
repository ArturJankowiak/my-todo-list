import { TodoService } from './todo.service';
import { Component, OnInit } from '@angular/core';
import { TodoItem } from './todo-item';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoList: Array<TodoItem> = [];
  todoForm: FormGroup;

  constructor(private todoService: TodoService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loadTodoList();
    this.todoForm = this.createTodoForm();
  }

  addTodo(): void { 
    this.todoService.addTodoItem(this.todoForm.value).then(() => {
      this.loadTodoList();
      this.todoForm.reset();
    });
  }

  createTodoForm(): FormGroup {
    return this.formBuilder.group({
      description: ['', Validators.required],
      isDone: [false]
    });
  }

  private loadTodoList(): void {
    this.todoService.getTodoList().then(todoList => this.todoList = todoList);
  }
}
