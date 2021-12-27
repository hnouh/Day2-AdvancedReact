const initialState ={
    user:[]
}

function user(state=initialState, {type, payload}) {
    switch(type){
        case 'ADD-USER':
            return {user:[...state.user,payload]}
        case 'REMOVE-USER':
            return {
                user: state.user.filter((element) => {
                  return element !== payload;
                }),
              };

        default: return state
    }
}
export default user;

export const addUser= (payload) =>{
    return {
    type:'ADD-USER',
    payload:payload
}
}

export const removeUser= (payload) =>{
    return {
    type:'REMOVE-USER',
    payload:payload
}
}
