import { Component } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  date?: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My todos';

  public todos: Todo[] = [
    {
      id: 1,
      title: 'Drink coffee',
      completed: true,
      date: new Date()
    },
    {
      id: 2,
      title: 'Create best todo app',
      completed: false,
      date: new Date()
    },
    {
      id: 3,
      title: 'Test best todo app',
      completed: false,
      date: new Date()
    }
  ];

  onToggle(id: number) {
    const idx = this.todos.findIndex(t => t.id === id);
    this.todos[idx].completed = !this.todos[idx].completed;
  }
}
