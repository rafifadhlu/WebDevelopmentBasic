import react from 'react'
import { useSelector } from 'react-redux'

function TodoList(){
    const state = useSelector(state => state.todo)
    console.log(state)

    return (
        <div>
            <h2>Todolist</h2>
        </div>
            
    )
}

export default TodoList