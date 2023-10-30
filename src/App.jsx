import {useState} from 'react';
import Header from './components/Header';
import TaskList from  './components/TaskList';


function App() { 
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Cocinar',completed: false },
    { id: 2, name: 'Ir de compras', completed: true },
    { id: 3, name: 'Terminar laboratorios', completed: false },
    { id: 3, name: 'Lavar el carro', completed: true },
  ]);
  
  return (
    <div className="tareas">
      <Header />
      <TaskList tasks={tasks} />
    </div>
    
  );
};

export default App;
