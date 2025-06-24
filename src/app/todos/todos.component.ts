import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../components/model/todo.type';
import { catchError } from 'rxjs';
import { NgIf } from '@angular/common';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';

@Component({
  selector: 'app-todos',
  imports: [NgIf, TodoItemComponent, FormsModule, FilterTodosPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);
  searchTerm = signal('');

  ngOnInit(): void {

    this.todoService.getTodoFromApi().pipe(catchError((err) => {
      console.log(err)
      throw err
    })).subscribe((todo) =>
      this.todoItems.set(todo)
    )
  }

  todoUpdate(todoItem: Todo) {
  this.todoItems.update((item) => {
    return item.map((res) => {
      if(res.id === todoItem.id) {
        return {
          ...res,
          completed: !res.completed
        }
      } 
      return res
    })
  })
  }

}
