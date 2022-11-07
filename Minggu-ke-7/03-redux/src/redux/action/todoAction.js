import axios from "axios"

export const GET_TODO = "GET_TODO"
export const FETCH_START ="FETCH_START"
export const SUCCES_GET_TODO = "SUCCESS_GET_TODO"

function fetchStart(){
    return{
        type: FETCH_START
    }
}

function successGet(params){
    return {
        type: SUCCES_GET_TODO,
        payload: params
    }
}

export const getTodo = () => {
    return async(dispatch) => {
        dispatch(fetchStart())

        const res = await axios.get("https://6356aa0c2712d01e14f9b1d7.mockapi.io/todo")
        dispatch(successGet(res.data))
    }
}
