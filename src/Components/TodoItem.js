import React from 'react';

class TodoItem extends React.Component {

  render() {

    return (
      <li className="TodoItem">
        <strong>{this.props.todo.title}</strong>
      </li>
    );
  }
}

export default TodoItem;
