import React, {Component} from 'react'

class CreateTodoForm extends Component {
  state = {
    todo: ''
  }

  onInputChange = event => {
    this.setState({
      todo: event.target.value
    })
  }

  onFormSubmit = event => {
    event.preventDefault();
    let todo = this.state.todo;
    this.props.createTodo(todo);
    this.setState({
      todo: ''
    });
  }

  render() {
    return (
      <div className='createForm todoForm'>
        <h2>Create A New Todo!</h2>
        <form onSubmit={ this.onFormSubmit }>
          <input
            onChange={ this.onInputChange }
            placeholder='Write a todo here ...'
            type='text'
            value={this.state.todo} />
          <button type='submit' className="todoButton">Create Todo!</button>
        </form>
      </div>
    )
  }
}

export default CreateTodoForm
