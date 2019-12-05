import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {

    constructor(){
      super();
      this.state = {
        todos: [
          {
            task: 'Organize Garage',
            id: Date.now() - 1,
            completed: false
          },
          {
            task: 'Bake Cookies',
            id: Date.now() + 2,
            completed: false
          }
        ]
      }
    }
      // Methods go here (outside of constructor or will get error)
      // State is immutable, so we must make a copy of the state array to modify it. 
      // Once modified, we can use setState with spread operator old array, and new array contents
        
    addTodo = async newTodo => {
      const todo = {
        task: newTodo,
        id: Date.now(),
        completed: false
      }
      // setState with new todo, and old array
      this.setState({todos: [...this.state.todos, todo]})
    }


    toggleTodo = taskId => {
        this.setState({
          todos: this.state.todos.map((todo) => {
            if (taskId === todo.id) {
              return {...todo, completed: !todo.completed
              };
            };
            return todo
          })
        })
        console.log(this.state)
    }

    filterTodo = array => {
       this.setState({
        todos: array.map((filtered) => {
            if (filtered.completed === true) {
              return {...!filtered}
            }    
       return filtered
        })
       })


    }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
        <TodoForm todos={this.state.todos} addTodo={this.addTodo} filterTodo={this.filterTodo}/>
      </div>
    );
  }
}

export default App;
