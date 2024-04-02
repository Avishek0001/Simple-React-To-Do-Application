import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./redux/TaskSlice";
import Button from 'react-bootstrap/Button';
import "./App.css"

const TaskInput = () =>{
    const [title , setTitle] = useState('')
    //This Hook is used for state management anf here it used to manage the text input value and update it as the user types
    const dispatch = useDispatch()
        // This hook is used to dispacth actions from the Redux store to get the reference values from the reducer functions


    const handleChange = (e)=> {
        e.preventDefault();
        setTitle(e.target.value)
    }

    const handleSubmit = ()=>{ 
        if(title.trim()){
            dispatch(addTask({id:Date.now(),title}))//It is used basically for getting unique identifiers
            setTitle('')
            console.log(title);
        }
    }

    

    return (
        <>
        <div className="input-area">

            <input 
            className="input-field"
            type="text" 
            value={title} 
            onChange={handleChange} 
            placeholder="Add Your Task Here..." 
            />
            
            <button 
            onClick={handleSubmit} 
            className="button-field">Add</button>
            </div>
        
        </>
    )
}

export default TaskInput