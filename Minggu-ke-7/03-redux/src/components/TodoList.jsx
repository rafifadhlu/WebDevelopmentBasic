import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../redux/action/todoAction";

function TodoList() {
    const dispatch = useDispatch()
    const state = useSelector(state => state.todo)
    console.log(state)

    useEffect(() => {
        dispatch(getTodo())
    },[])


    return(
        <div>
            <h2>Todolist</h2>
        </div>
    )
}

export default TodoList