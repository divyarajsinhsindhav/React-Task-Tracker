import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={
        `task ${task.reminder ? 'reminder' : ''}`
      } 
      onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.text}
        <FontAwesomeIcon 
            icon={faTrash} 
            onClick={() => onDelete(task.id)}    
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
