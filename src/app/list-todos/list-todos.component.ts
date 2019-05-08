import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public targetDate: Date,
    public done: boolean
  )
  {}
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos : Todo [];

  todoMessage: string;

  constructor(private todoService:TodoDataService) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('Bernard').subscribe(
      response => {
        this.todos = response
      }
    )
  }

  deleteTodo(id){
    console.log("deleting todo with id: " + id);
    this.todoService.deleteTodo('Bernard', id).subscribe(
      response => {
        console.log(response);
        this.todoMessage = `Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      }
    )
  }

}
