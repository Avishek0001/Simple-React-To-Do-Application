import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './redux/TaskSlice';

export default configureStore({
  reducer: {
    tasks: taskReducer,
  },
});