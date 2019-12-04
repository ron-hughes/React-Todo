import React from 'react'

class TodoForm  extends React.Component  {
    constructor(props){
        super(props);
        this.state = {
            inputText: "",
        }
    }
    
    
    //  watch for changes on input field, then setState with that input text
    changeHandler = async event => {
        await this.setState({ inputText: event.target.value})
    }
    

    //whatever value is in inputText, we want to pass into addTodo function
   
    submitHandler = async event => {
        event.preventDefault();
        this.props.addTodo(this.state.inputText)
        this.setState({inputText: ""})
    }

  
    
render() {
    return (
        <div>
            <form onSubmit={this.submitHandler}>
                <input type="text" onChange={this.changeHandler} name="inputText" value={this.state.inputText}/>
                <button type="submit"> Add Todo </button>
                <button onClick={e => this.props.filterTodo(this.props.todos)}> Clear Completed</button> 
            </form>
        </div>
    )
}
}


export default TodoForm;