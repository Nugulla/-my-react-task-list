import Task from './Task';

//funcion task list visualiza la lista de tareas
function TaskList({ tasks }) {
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <Task key={index} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;