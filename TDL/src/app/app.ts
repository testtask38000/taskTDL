import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms"
import { CommonModule } from "@angular/common"
import { Task } from './task';

@Component({
  imports: [RouterOutlet, CommonModule, FormsModule],
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

  complitionTaskStatus( task: {statusOfCompletion: boolean}): void {
    task.statusOfCompletion = !task.statusOfCompletion;
  }
}
