import React from "react";


const Todo = (props) => {
    return (
    <div onClick={ e => props.toggleTodo(props.todo.id)} style={props.todo.completed ? { textDecoration: 'line-through'}: null } > {props.todo.task}</div>
    )
}

export default Todo




// style={props.todo.completed ? { textDecoration: 'line-through'}: null }