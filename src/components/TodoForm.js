import React, {Component} from 'react';

class TodoForm extends Component {

  state = {
    todo: ''
  }

  onChange = (event) => {
    this.setState({
      todo: event.target.value
    });
  }

  onSubmit = (event) => {
    event.preventDefault()
    var todo = this.state.todo;
    this.props.onUpdateTodo(todo);
    this.setState({
      todo: ''
    });
  }

  render() {
    return (
      <div className='todoForm'>
        <form onSubmit={ this.onSubmit }>
          <input
            autoFocus={this.props.autoFocus}
            onChange={ this.onChange }
            placeholder='Write a todo here ...'
            type='text'
            value={this.props.todo.body} />
          <button type='submit'>{this.props.buttonName}</button>
        </form>
      </div>
    )
  }
}

export default TodoForm;
