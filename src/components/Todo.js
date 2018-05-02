import React, {Component} from 'react';
import TodoForm from './TodoForm';

class Todo extends Component {

  editClickedTodo = () => {
    this.props.onEditTodo(this.props.todo)
  }

  deleteClickedTodo = () => {
    this.props.onDeleteTodo(this.props.todo);
  }

  render(){
    let { todo } = this.props
    let todoForm = <TodoForm todo={todo} autoFocus={true} buttonName="Update Todo!" onUpdateTodo={this.props.onUpdateTodo} />

    return (
      <div>
        <p data-todos-index={todo._id}>
          <span>{todo.body}</span>
          <span className='editButton' onClick={this.editClickedTodo}>
            ({this.props.editing ? 'cancel' : 'edit'})
          </span>
          <span className='deleteButton' onClick={this.deleteClickedTodo}>
            (delete)
          </span>
        </p>
        { this.props.editingTodoId === this.props.todo._id && this.props.editing === true ? todoForm : null }
        
      </div>
    )
  }
}

export default Todo;
