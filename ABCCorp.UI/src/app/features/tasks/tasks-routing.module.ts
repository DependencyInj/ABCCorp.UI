import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TaskListComponent } from "./components/task-list/task-list.component";

const routes: Routes = [
    { path: '', redirectTo: 'tasks', pathMatch: 'full' },
    { path: 'tasks', component: TaskListComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TaskRoutingModule { }