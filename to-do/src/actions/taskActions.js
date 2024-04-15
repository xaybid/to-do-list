// Action creator function to add a new task
export const addTask = (text) => {
    return {
      // Action type for adding a task
      type: 'ADD_TASK',
      // Payload containing the new task's id and text
      payload: {
        id: Math.random().toString(36).substr(2, 9), // Generating a unique id
        text, // Text of the new task
      },
    };
  };
  
  // Action creator function to delete a task
  export const deleteTask = (id) => {
    return {
      // Action type for deleting a task
      type: 'DELETE_TASK',
      // Payload containing the id of the task to be deleted
      payload: id,
    };
  };
  