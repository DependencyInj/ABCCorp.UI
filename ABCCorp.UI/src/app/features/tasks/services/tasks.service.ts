import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, shareReplay } from 'rxjs';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  baseUrl: string = 'http://localhost:5201/api'
  taskList$!: Observable<Task[]>;

  constructor(private httpClient: HttpClient) { }

  getTasks(): Observable<Task[]> {
    const url = `${this.baseUrl}/tasks`;
    return this.httpClient.get<Task[]>(url)
  }

  getEmployeeTasks(empId: number): Observable<Task[]> {
    const url = `${this.baseUrl}/empolyee/tasks?employeeId=${empId}`;
    return this.httpClient.get<Task[]>(url);
  }

  markTaskAsCompleted(empId: number, taskId: number){
    const url = `${this.baseUrl}/empolyee/markTaskAsCompleted?employeeId=${empId}&taskId=${taskId}`;
    return this.httpClient.post(url, {});
  }
}
