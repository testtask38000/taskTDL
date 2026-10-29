import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from './task';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('TDL');

  newTask = "";
  tasks: Task[] = [];
  nextId = 1;

  addTask(): void {
    const text = this.newTask.trim();

    if (!text) {
      return;
    }

    this.tasks.push({
      id: this.nextId++,
      text,
      statusOfCompletion: false
    });

    this.newTask = "";
  }
}
