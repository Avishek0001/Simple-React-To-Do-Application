import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "./TaskSlice";
import Task from "./Task";


const TaskList = () => {
    const tasks = useSelector(state => state.tasks.tasks)
    //This Hooks extract the tasks array from the store state and then render the list of tasks based on this data.
    const dispatch = useDispatch();
    // This hook is uesd to dispacth actions from the Redux store to get the reference values from the reducer functions

    const handleDelete = (id) => {
        dispatch(deleteTask( id))
        console.log(id);
    }
    //Here it dispatch actions directly from functional components to delete a task when the user clicks on a delete button.


    return (
        <>

        <div className="main-container">

        {tasks.length>0 && (<h2 >Task TO-DO - {tasks.length} </h2>)}  
        {/* //Checking if there is any tasks . It will show only if there is any tasks to do. */}
            <Task
             tasks={tasks}
             onDelete={handleDelete}
             />
            {/* Used Props to get the list from the task.jsx component */}
        </div>
        </>
    )
}

export default TaskList;