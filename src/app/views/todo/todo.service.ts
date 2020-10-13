import { TodoItem } from './todo-item';
import { Injectable } from '@angular/core';
import { TODO_LIST } from './todo.mock';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList: Array<TodoItem> = [];

  constructor() {
    this.todoList = TODO_LIST;
  }

  addTodoItem(todo: TodoItem): Promise<number> {
    const ids: Array<number> = this.todoList.map(todoItem => todoItem.id); 
    const id: number = (Math.max.apply(Math, ids) +1) || 1;

    return Promise.resolve(this.todoList.push({
      id,
      ...todo
    }));
  }

  getTodoList(): Promise<Array<TodoItem>> {
    return Promise.resolve(this.todoList);
  }
}
