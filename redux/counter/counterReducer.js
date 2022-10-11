const InitialState = {
    counterList : [
        {
            id : 0,
            value : 0
        }
    ]
}

const counterReducer = (state = InitialState , action) => {
    let copy = {...state, counterList : [...state.counterList]}

    switch (action.type) {

        case INCREMENT : 
            copy.counterList.map((value,key) => {
                if (value.id === action.payload.key ) {
                    copy.counterList[key] = {...copy.counterList[key] , value : copy.counterList[key].value + 1}
                }
            })
            return copy;

        case DECREMENT :
            copy.counterList.map((value,key) => {
                if (value.id === action.payload.key ) {
                    copy.counterList[key] = {...copy.counterList[key] , value : copy.counterList[key].value - 1}
                }
            })
            return copy;

        case ADDCOUNTER :
            copy.counterList = [...copy.counterList , { id : action.payload.key , value : 0} ]
            return copy;

        case RESETCOUNTER :
            copy.counterList.map((value,key) => {
                copy.counterList[key] = {...copy.counterList[key] , value : 0};
            })
            return copy;

        case DELETECOUNTER :
            copy.counterList = copy.counterList.filter((value,key) => {
                value.id === action.payload.key
            })
            return copy;

        default :
            return state;
    }
}

export default counterReducer