import { Component, OnInit} from '@angular/core';
import { Task } from '../shared/task.model';
import { AddTaskComponent } from './add-task/add-task.component';
import { ShowAddTask } from '../shared/services/show-add-task.service';
import { ShowEditTask } from '../shared/services/show-edit-task.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
constructor(public showAddTask: ShowAddTask, public showEditTask: ShowEditTask){

}

  tasks: Task[] = [
    new Task("Clean Out Garage", "Nov 23, 2023", "High", "To Do"),
    new Task("Clean Out Garage", "Nov 23, 2023", "High", "To Do"),
    new Task("Clean Out Garage", "Nov 23, 2023", "High", "To Do"),
    new Task("Clean Out Garage", "Nov 23, 2023", "High", "To Do"),
    new Task("Clean Out Garage", "Nov 23, 2023", "High", "To Do"),

  ];

  //Modal//

  ngOnInit(): void {

  }

}
