import { TodoItem } from './todo-item';
import { Injectable } from '@angular/core';
import { TODO_LIST } from './todo.mock';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodoList(): Promise<Array<TodoItem>> {
    return Promise.resolve(TODO_LIST);
  }
}
