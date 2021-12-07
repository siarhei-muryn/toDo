import {Component} from '@angular/core';
import {style} from "@angular/animations";

class Task {
  taskName: string;
  done: boolean;
  id: number;

  constructor(taskName: string, id: number) {
    this.taskName = taskName;
    this.done = false;
    this.id = id;
  }

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text: string = "";

  tasks: Task[] = [];

  addItem(textTask: string): void {
    if (textTask === "null" || textTask.trim() === "") {
      return;
    } else this.tasks.push(new Task(textTask, this.tasks.length));
    console.log(this.tasks);
  }

  isDone(task: Task) {
    if (task.done) {
      return true;
    } else return false;
  }
}






