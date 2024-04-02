import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Task({tasks,onDelete}){
    return(
        <ul style={{listStyle:"none"}}>
            {tasks.map((task,index) =>  (                

                <li className="list-field" key={task.id}>
                 <h3>{task.title}</h3> 
                    <button 
                    className="button-field" 
                    onClick={()=>onDelete(task.id)}>
                    <span>Delete</span>
                    <span>
                        <DeleteIcon/>
                    </span>
                    </button>
                </li>
               
                )
                )}
           
        </ul>

    )
}

export default Task