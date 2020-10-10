import { StudentsComponent } from './views/students/students.component';
import { TodoComponent } from './views/todo/todo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'todo', component: TodoComponent },
  { path: 'students', component: StudentsComponent },
  { path: '', redirectTo: '/todo', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
