import {incCounter, decCounter, resetCounter} from '../reducers/counter'
import {addUser,removeUser} from '../reducers/user'
import { useDispatch, useSelector } from "react-redux";
import {useState} from 'react'
const ReduxEx=()=>{
    const [userName,setUserName]= useState()
    const dispatch =useDispatch()

    const state= useSelector((store)=>{
        return{
            counter:store.counter.counter,
            user:store.user.user
        }
    })

    return (
        <>
        <br></br>
        <button onClick={()=> dispatch(incCounter(10))} >+</button>
        <p>{state.counter}</p>
        <button onClick={()=>dispatch(decCounter(10))} >-</button><br></br>
        <button onClick={()=>dispatch(resetCounter())} >Reset Counter</button>
        <br></br>
        <br></br>
        <input onChange={(e)=>{setUserName(e.target.value)}} type="text" placeholder="enter user name" ></input>
        <button onClick={()=>dispatch(addUser(userName))} >Add user</button>
        {state.user.map((user)=>{
            return(
                <>
                <h3>{user}</h3>
                <button onClick={()=>dispatch(removeUser(user))}> Delete</button>
                </>
            )
        })}

        </>
    )
}

export default ReduxEx