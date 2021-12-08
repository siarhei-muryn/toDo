import {Component, OnInit} from '@angular/core';
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
export class AppComponent implements OnInit {
  text: string = "";
  tasks: Task[] = [];

  ngOnInit(): void {
    this.fromStorage();
  }

  fromStorage(): void {
    for (let key in localStorage) {
      if (!localStorage.hasOwnProperty(key)) {
        continue;
      }
      let taskName = localStorage.getItem(key);
      if (taskName !== null) {
        let task = new Task(taskName, +key);
        this.tasks.push(task);
      }
    }
  }

  addItem(textTask: string): void {
    let input = document.getElementsByTagName("input")[0];
    input.value = "";
    if (textTask === "null" || textTask.trim() === "") {
      return;
    } else {
      let task = new Task(textTask, localStorage.length)
      this.tasks.push(task);
      localStorage.setItem(task.id.toString(), task.taskName);
    }
  }

  isDone(task: Task): boolean {
    if (task.done) {
      localStorage.removeItem(task.id.toString());
      return true;
    }
    return false;
  }

  toDoBtn(task: Task): void {
    task.done = !task.done;
  }

}






