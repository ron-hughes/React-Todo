import React from 'react';
import Todo from './Todo';


const TodoList = (props) => {

        return(
            <>
                {props.todos.map((todo, index) => {
                    return <Todo todo={todo} toggleTodo={props.toggleTodo} key={index}/>
                })}
            </>
        )
    
}

export default TodoList