import axios from 'axios';

class TodoModel {
  static all() {
    // const request = axios.get("https://jsonplaceholder.typicode.com/todos");
    const request = axios.get("http://10.1.6.96:8080/todos");
    return request;
  }

  static create(todo) {
    // let request = axios.post("https://jsonplaceholder.typicode.com/todos", todo)
    let request = axios.post("http://10.1.6.96:8080/todos", todo)
    return request
  }

  static delete(todo) {
    // let request = axios.delete(`https://jsonplaceholder.typicode.com/todos${todo._id}`)
    let request = axios.delete(`http://10.1.6.96:8080/todos/${todo._id}`)
    return request
  }

  static update(todoId, todoBody) {
    // let request = axios.put(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
    let request = axios.put(`http://10.1.6.96:8080/todos/${todoId}`, {
        body: todoBody
    })
    return request
  }
}

export default TodoModel;
