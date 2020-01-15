import {Component, OnInit} from '@angular/core';
import {TodosService} from '../shared/todos.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  providers: [ TodosService ]
})
export class TodosComponent implements OnInit {
  public loading = true;

  constructor(public todosService: TodosService) { }

  ngOnInit() {
    this.todosService.fetchTodos().subscribe(() => {
      this.loading = false;
    });
  }

  onChange(id: number) {
    this.todosService.onToggle(id);
  }

  removeTodo(id: number) {
    this.todosService.removeTodo(id);
  }

}
