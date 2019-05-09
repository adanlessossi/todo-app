import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient: HttpClient) { }

  retrieveAllTodos(username){
    return this.httpClient.get<Todo[]>(`${API_URL}/users/${username}/todos`);
  }

  deleteTodo(username, id){
    return this.httpClient.delete<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }

  getTodo(username, id){
    return this.httpClient.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  
  }

  updateTodo(username, id, todo) {
    return this.httpClient.put(`${API_URL}/users/${username}/todos/${id}`, todo);
  }

  createTodo(username, todo) {
    return this.httpClient.post(`${API_URL}/users/${username}/todos`, todo);
  }
}
