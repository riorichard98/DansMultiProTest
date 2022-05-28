const initialState = {
    jobs:[],
    job:false
}

// global state untuk jobs dan job
const reducer = (state=initialState,action) =>{
    if(action.type === 'getAllJob'){
        return {...state,jobs:action.payload}
    }
    if(action.type === 'getOneJob'){
        return {...state,job:action.payload}
    }
    return state
}

export default reducer