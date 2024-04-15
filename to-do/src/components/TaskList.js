import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../actions/taskActions'; // Importing action creator to delete a task
import { ListGroup, Button } from 'react-bootstrap';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks); // Get tasks from Redux store
  const dispatch = useDispatch(); // useDispatch hook to dispatch actions

  // Function to handle task deletion
  const handleDelete = (id) => {
    dispatch(deleteTask(id)); // Dispatch the deleteTask action with the task id
  };

  return (
    <ListGroup>
      {tasks.map((task) => (
        <ListGroup.Item key={task.id}>
          {task.text} {/* Display task text */}
          <div className='float-right'> {/* Align delete button to the right */}
            <Button
              variant="danger"
              className="ml-2" // Add margin to the left of the button
              onClick={() => handleDelete(task.id)} // Call handleDelete function on button click
            >
              Delete {/* Button text */}
            </Button>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TaskList; // Exporting TaskList component
