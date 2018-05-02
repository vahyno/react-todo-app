import React, { Component } from 'react';
import Todo from './Todo';

class Todos extends Component {
  render() {
    let { todos } = this.props;
    if(todos.length === 0) {
      todos = "Loading..."
    } else {
      todos = todos.map(todo => {
        return <Todo
                  key={todo._id}
                  todo={todo}
                  editing={this.props.editing}
                  editingTodoId={this.props.editingTodoId}
                  onEditTodo={this.props.onEditTodo}
                  onUpdateTodo={this.props.onUpdateTodo}
                  onDeleteTodo={this.props.onDeleteTodo}/>
      })
    }
    
    
    return(
      <div className="todos">
        {todos}
      </div>
    )
  }
}

export default Todos
