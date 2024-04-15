import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/taskActions'; // Importing action creator to add a task
import { Form, Button } from 'react-bootstrap';

const TaskInput = () => {
  const [text, setText] = useState(''); // State to store the text of the new task
  const dispatch = useDispatch(); // useDispatch hook to dispatch actions

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (text.trim() !== '') { // Check if the text is not empty
      dispatch(addTask(text)); // Dispatch the addTask action with the text
      setText(''); // Clear the input field after adding the task
    }
  };

  return (
    <Form onSubmit={handleSubmit}> {/* Form component with handleSubmit function */}
      <Form.Group controlId="taskInput"> {/* Form group for task input */}
        <Form.Control
          type="text"
          placeholder="Enter task"
          value={text} // Bind input value to the 'text' state
          onChange={(e) => setText(e.target.value)} // Update 'text' state on input change
        />
      </Form.Group>
      <Button variant="primary" type="submit"> {/* Submit button */}
        Add Task {/* Button text */}
      </Button>
    </Form>
  );
};

export default TaskInput; // Exporting TaskInput component
