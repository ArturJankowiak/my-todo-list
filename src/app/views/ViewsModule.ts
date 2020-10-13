import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { StudentsComponent } from './students/students.component';




@NgModule({
  declarations: [TodoComponent, StudentsComponent, PageNotFoundComponent],
  exports: [TodoComponent, StudentsComponent],
  imports: [
    CommonModule
  ]
})
export class ViewsModule {
}
