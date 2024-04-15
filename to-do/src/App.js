import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux'; // Importing createStore function from Redux
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import taskReducer from './reducers/taskReducer'; // Importing taskReducer
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Creating the Redux store with the taskReducer
const store = createStore(taskReducer);

function App() {
  return (
    // Providing the Redux store to the application using Provider
    <Provider store={store}>
      <div className="App">
        <h1>To-Do App</h1>
        {/* TaskInput component for adding tasks */}
        <TaskInput />
        {/* TaskList component for displaying tasks */}
        <TaskList />
      </div>
    </Provider>
  );
}

export default App; // Exporting the App component
