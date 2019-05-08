import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo: Todo
  id: number

  constructor(private todoService: TodoDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.todo = new Todo(1, '', new Date(), false);
    
    this.id =this.route.snapshot.params['id'];
    this.todoService.getTodo('Bernard', this.id).subscribe(
      data => {
        this.todo = data;
      }
    )
  }

  updateTodo(){
    this.todoService.updateTodo('Bernard', this.id, this.todo).subscribe(
      data => {
        console.log(data)
        this.router.navigate(["todos"])
      }
    );
  }

}
