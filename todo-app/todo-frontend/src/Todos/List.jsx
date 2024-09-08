import React from 'react'
import Todo from "./Todo"

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo)
  }

  const onClickComplete = (todo) => () => {
    completeTodo(todo)
  }

  return (
    <>
      {todos
        .map(todo => (
          <React.Fragment key={todo.id}>
            <Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />
            <hr />
          </React.Fragment>
        ))
        .reduce((acc, cur) => [...acc, cur], [])}
    </>
  )
}

export default TodoList
