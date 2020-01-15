import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Todo} from '../app.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  @Input() todos: Todo[] = [];
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onToggle = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onChange(id: number) {
    this.onToggle.emit(id);
  }

}
