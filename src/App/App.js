import './App.css';
import { v4 as uuidv4 } from 'uuid';  //ID generator
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';
import { LanguageProvider } from '../LanguageContext';


function App() {

  return (
    <LanguageProvider>
      <TodoProvider>
        <AppUI></AppUI>
      </TodoProvider>
    </LanguageProvider>

  );
}

export default App;
