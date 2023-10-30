const Task = ({ task }) => {

    return (
      <li>
        <label>
          {/* <!--si tarea esta completada marca con una fecha--> */}
          <input type="checkbox"   checked={task.completed} /> {task.name}
        </label>
      </li>
    );
  };
  
  export default Task;