// Initial state of the task reducer
const initialState = {
    tasks: [], // Array to hold tasks
  };
  
  // Reducer function to manage tasks state
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      // Action type to add a new task
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.payload], // Add new task to tasks array
        };
      // Action type to delete a task
      case 'DELETE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.payload), // Remove task with specified id
        };
      // Default case for other actions
      default:
        return state;
    }
  };
  
  export default taskReducer; // Exporting taskReducer function
  