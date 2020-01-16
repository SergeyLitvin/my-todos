import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { HttpClientModule } from '@angular/common/http';
import { TodosFormComponent } from './todos-form/todos-form.component';
import { FormsModule } from '@angular/forms';
import {TodosFilterPipe} from './shared/todos-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodosFormComponent,
    TodosFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
