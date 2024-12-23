import { Component, Input } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input() taskList!: Task[] | null;

  constructor(private taskService: TasksService){

  }

  ngOnInit(){
  }

  ngOnChanges(){
    console.log("tasks", this.taskList);
  }

  markAsCompleted(taskId: number){
    this.taskService.markTaskAsCompleted(1, taskId).subscribe(resp => {
      
    });
  }
}
