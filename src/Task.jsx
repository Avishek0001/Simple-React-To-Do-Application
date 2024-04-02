import React from "react";

function Task({tasks,onDelete}){
    return(
        <ul style={{listStyle:"none"}}>
            {tasks.map((task,index) =>  (                

                <li className="list-field" key={task.id}>
                 <h3>{task.title}</h3> 
                    <button className="button-field" onClick={()=>onDelete(task.id)}>delete</button>
                </li>
               
                )
                )}
           
        </ul>

    )
}

export default Task