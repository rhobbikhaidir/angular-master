import { inject, Injectable } from '@angular/core';
import { Todo } from '../components/model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  http = inject(HttpClient)

  todoItem: Array<Todo> = [
    {
      userId: 1,
      id: 0,
      title: "groceries",
      completed: false
    },
    {
      userId: 1,
      id: 1,
      title: "car wash",
      completed: false
    }
  ]
  getTodoFromApi() {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    return this.http.get<Array<Todo>>(url)
  }

}
