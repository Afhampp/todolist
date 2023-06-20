import { Component,Output,EventEmitter } from '@angular/core';
import { TASK } from 'src/app/TASK';
import { UiService } from 'src/app/services/ui.service';
import { Subscription} from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
@Output() onAddTask:EventEmitter<TASK>=new EventEmitter()

  text!:string;
  day!:string;
  reminder:boolean=false;
  showAddTask!:boolean
  subscription!:Subscription;

  constructor(private uiService:UiService){
    this.subscription=this.uiService.ontoggle().subscribe((value)=> (this.showAddTask=value))
  }

  onSubmit(){
    if(!this.text){
      alert('please add a task!')
      return
    }
    const newTask={
      text:this.text,
      day:this.day,
      reminder:this.reminder
    }
    this.onAddTask.emit(newTask);
    this.text='';
    this.day='';
    this.reminder=false;

}
}
