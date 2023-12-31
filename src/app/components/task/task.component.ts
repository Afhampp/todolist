import { Component,OnInit } from '@angular/core';
import { TASK } from 'src/app/TASK';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{
  tasks:TASK[]=[];
  constructor(private taskService:TaskService){}
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=> (this.tasks=tasks))
  }
  deleteTask(task:TASK){
    this.taskService.deleteTask(task).subscribe(()=> (this.tasks=this.tasks.filter( (t) => t.id !==task.id)))
  }
  toggleReminder(task:TASK){
    task.reminder=!task.reminder;
    this.taskService.updateTaskReminder(task).subscribe()
  }
  addTask(task:TASK){
    this.taskService.addTask(task).subscribe((task)=> (this.tasks.push(task)))
  }
}
