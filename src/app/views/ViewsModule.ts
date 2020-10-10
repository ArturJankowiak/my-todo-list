import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { StudentsComponent } from './students/students.component';




@NgModule({
  declarations: [TodoComponent, StudentsComponent],
  exports: [TodoComponent, StudentsComponent],
  imports: [
    CommonModule
  ]
})
export class ViewsModule {
}
