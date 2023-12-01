import {useState} from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 2,
      text: 'Read Chapter 3',
      day: 'Feb 8th at 7:30 am',
      reminder: false
    },
    {
      id: 3,
      text: 'Submit Homework Assignment',
      day: 'Feb 10th at 3:00 pm',
      reminder: true
    },
    {
      id: 4,
      text: 'Attend Team Meeting',
      day: 'Feb 15th at 10:00 am',
      reminder: true
    },
    {
      id: 5,
      text: 'Prepare Presentation Slides',
      day: 'Feb 20th at 2:30 pm',
      reminder: false
    },
    {
      id: 6,
      text: 'Review Code Pull Request',
      day: 'Feb 25th at 4:45 pm',
      reminder: true
    }
  ]) 

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
      task.id === id ? {...task, reminder: !task.reminder} 
      : task))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? 
        (<Tasks tasks = {tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) 
        : ('No Tasks to Show') 
      }
    </div>
  );
}

export default App;
