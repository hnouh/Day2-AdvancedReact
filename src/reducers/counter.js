const initialState ={
    counter:0
}

function counter(state=initialState, {type, payload}) {
    switch(type){
        case 'INC-COUTER':
            return {counter:state.counter+1}
        case 'DEC-COUTER':
            return {counter:state.counter-1}
        case 'RESET-COUTER':
            return {counter:0}
        default: return state
    }
}
export default counter;

export const incCounter= (payload) =>{
    return {
    type:'INC-COUTER',
    payload:payload
}
}

export const decCounter= (payload) =>{
    return {
    type:'DEC-COUTER',
    payload:payload
}
}

export const resetCounter= () =>{
    return {
    type:'RESET-COUTER',
}
}