import React, { Component } from 'react';
import TodoModel from '../models/TodoModel.js';
import CreateTodoForm from '../components/CreateTodoForm';
import Todos from '../components/Todos';

class TodosContainer extends Component {
  state = {
    todos: [],
    editing: false,
    editingTodoId: null,
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData(){
    TodoModel.all().then(res => {
      // console.log(res.data.todos)
      this.setState ({
        todos: res.data.todos,
      })
    })
  }

  createTodo = todo => {
    let newTodo = {
        body: todo,
        completed: false
    }

    TodoModel.create(newTodo)
      .then(res => {
        console.log(res)
        let todos = this.state.todos;
        let newTodos = todos.concat(res.data);
        // console.log(newTodos)
        this.setState({ todos: newTodos });
        // console.log(this.state.todos)
    })
  }

  editTodo = todo => {
    // console.log(todo);
    let editing = this.state.editing;
    this.setState({
      editingTodoId: todo._id,
      editing: !editing
    });
  }

  updateTodo = todoBody => {
    let todoId = this.state.editingTodoId;

    TodoModel.update(todoId, todoBody)
      .then(res => {
        // console.log(res)
        let todos = this.state.todos;
        let todoToUpdate = todos.find(todo => todo._id === todoId);
        todoToUpdate.body = todoBody;
        this.setState({
          todos: todos,
          editingTodoId: null,
          editing: false
        })
      })
  }

  deleteTodo = todo => {
    // console.log(todo)
    TodoModel.delete(todo)
      .then(res => {
        let todos = this.state.todos.filter(todo => {
          return todo._id !== res.data._id
        });
        this.setState({todos})
      })
  }

  render() {
    console.log('TodosContainer State = ', this.state.todos)
    return (
      <div className='todosContainer'>
        <CreateTodoForm createTodo={ this.createTodo } />
        <Todos
          todos={this.state.todos}
          onEditTodo={this.editTodo}
          editing={this.state.editing}
          editingTodoId={this.state.editingTodoId}
          onUpdateTodo={this.updateTodo}
          onDeleteTodo={this.deleteTodo} />
      </div>
    )
  }
}

export default TodosContainer;
