import { Component,Input,Output,EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TASK } from 'src/app/TASK';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
@Input() task!:TASK
@Output() onDeleteTask:EventEmitter<TASK>=new EventEmitter()
@Output() onTogglereminder:EventEmitter<TASK>=new EventEmitter()

faTimes=faTimes
onDelete(task:TASK){
  this.onDeleteTask.emit(task)
}
onToggle(task:TASK){
  this.onTogglereminder.emit(task)
}
}
