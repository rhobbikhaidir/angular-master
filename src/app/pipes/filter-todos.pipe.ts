import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../components/model/todo.type';

@Pipe({
  name: 'filterTodos'
})
export class FilterTodosPipe implements PipeTransform {

  transform(todos: Todo[], searchTerm: string): Todo[] {
    if(!searchTerm) return todos;
    const text = searchTerm.toLowerCase()
    return todos.filter((item) => item.title.toLowerCase().includes(text))
  }

}
