import { Component, OnInit } from '@angular/core';
import {Todo, TodosService} from '../shared/todos.service';

@Component({
  selector: 'app-todos-form',
  templateUrl: './todos-form.component.html',
  styleUrls: ['./todos-form.component.scss']
})
export class TodosFormComponent implements OnInit {

  title = '';

  constructor(private todosService: TodosService) { }

  ngOnInit() {
  }

  addTodo() {
    const todo: Todo = {
      title: this.title,
      id: Date.now(),
      completed: false,
      date: new Date()
    };

    this.todosService.addTodo(todo);
    this.title = '';
  }
}
