import { createSlice } from '@reduxjs/toolkit';

const taskSLice = createSlice({ // Used Redux Toolkit here for creating actions and functions
    name:'tasks',
    initialState:{
        tasks:[]
    },
    reducers:{
        addTask:(state,action)=>{  //For adding new tasks in the lists
            state.tasks.push(action.payload)
        },
        deleteTask:(state,action)=>{  // For deleting existing tasks
           state.tasks =  state.tasks.filter((task)=> task.id !== action.payload)
           // Used filter method which will pass a new array of tasks without taking the id that will be clicked for deletion
           console.log(state.tasks);
        }

    }
})

export const {addTask , deleteTask} = taskSLice.actions;
export default taskSLice.reducer;