import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { StudentsComponent } from './students/students.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoComponent, StudentsComponent, PageNotFoundComponent],
  exports: [TodoComponent, StudentsComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class ViewsModule {
}
