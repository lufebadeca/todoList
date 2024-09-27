import './App.css';
import { v4 as uuidv4 } from 'uuid';  //ID generator
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';


function App() {

  return (
    <TodoProvider>
      <AppUI></AppUI>
    </TodoProvider>
  );
}

export default App;
