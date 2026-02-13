import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from './todo';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: ` <h1>Building a TODO List</h1>
  <p>Completed Todos : {{completedTodos().length}} </p> 

  <form [formGroup]="addTaskForm" (ngSubmit)="handleAddTaskForm()">
  <input type="number" min="4" formControlName="id">
  <input type="text" placeholder="Enter Title" formControlName="title">
  <button type="submit">Add</button>
  </form>
  @for(todo of todos(); track $index){
    <label [ngStyle]="{
    'text-decoration': todo.completed ? 'line-through' : 'none'
  }">
    <input type="checkbox" [checked]="todo.completed" (change)="updateTodo(todo)">
     {{todo.title}}
    </label>
  }
  `,
  styles: `label { display: block; padding : 20px}`,
})
export class AppComponent {
  todos = signal<Todo[]>([
    {
      id: 1,
      title: "Learn Angular",
      completed: false,
    },
    {
      id: 2,
      title: "Learn TypeScript",
      completed: false,
    },
    {
      id: 3,
      title: "Learn RxJS",
      completed: false,
    },
  ]);

  updateTodo(todo: Todo) {
    this.todos.update(tds =>
      tds.map((todoEntry) => {
        if (todo.id === todoEntry.id) todoEntry.completed = !todoEntry.completed;
        return todoEntry;
      })
    );

  }

  completedTodos = computed(() => this.todos().filter((todo) => todo.completed == true));


  addTaskForm = new FormGroup({
    id: new FormControl(4),
    title: new FormControl(""),
  })


  handleAddTaskForm() {
    this.todos.update(tds => [...tds, {
      id: this.addTaskForm.value.id || 0,
      title: this.addTaskForm.value.title || "",
      completed: false
    }]);
    this.addTaskForm.reset({ id: this.addTaskForm.value.id! + 1, title: "" });
  }
}
