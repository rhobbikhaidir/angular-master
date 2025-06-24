import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';

export const routes: Routes = [
    {
    path: '',
    loadComponent: () => HomeComponent,
    title: "home Bakayarouuu"
},
{
    path: 'todos',
    loadComponent: () => TodosComponent,
    title: "Todos"
}
];
