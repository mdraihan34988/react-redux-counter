import { INCREMENT, DECREMENT, ADDCOUNTER, DELETECOUNTER, RESETCOUNTER } from "./actionTypes"

export const increment = (index) => {
    return {
        type : INCREMENT,
        payload : {
            key : index,
            value : index + 1
        }
    }
}

export const decrement = (index) => {
    return {
        type : DECREMENT,
        payload : {
            key : index,
            value : index + 1
        }
    }
}

export const addCounter = (index) => {
    return {
        type : ADDCOUNTER,
        payload : {
            key : index
        }
    }
}

export const deleteCounter = (index) => {
    return {
        type : DELETECOUNTER,
        payload : {
            key : index,
        }
    }
}

export const resetCounter = () => {
    return {
        type : RESETCOUNTER
    }
}