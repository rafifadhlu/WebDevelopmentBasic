import React, {useState} from  "react";
import { useDispatch, useSelector } from "react-redux";
// import { addTodo } from "../redux/action/todoAction";

function TodoList(){
    const dispatch = useDispatch()
    const [inputTodo, setInputTodo] = useState("");
    // const todos = useSelector((state) => state.todo.data)

    const handleChange = (e) =>{
        e.preventDefault();
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();

        dispatch(addTodo())
        console.log(inputTodo)

    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Todolist</h2>
                <input type="text" value={inputTodo} onChange={handleChange}/>
            </form>

            <ul>
                {/* {todos.map((item, index) =>
                <li key={index}>
                    {item}
                </li>
              )} */}
            </ul>
        </div>
    )
}

export default TodoList