import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Observable } from 'rxjs';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  tasksList!: Task[];
  constructor(private taskService: TasksService) {
  }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getEmployeeTasks(1).subscribe(resp => {
      this.tasksList = resp;
    });
  }
}
