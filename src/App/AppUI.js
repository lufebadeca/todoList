import { Counter } from "../counter/counter";
import SearchInput from "../SearchInput/SearchInput";
import { TodoList } from "../todoList/todoList";

const AppUI = ( {completed, total, filteredList, searchValue, updateSearchVal, toggleTask, handleClearByID, loading, error} ) => {
return (
    <div className="App">
      <header className="App-header">

        <Counter></Counter>

        <SearchInput></SearchInput>
        
        <TodoList></TodoList>

        <button className='addButton' data-message="Click me to submit"><i className='bi bi-plus' ></i></button>

      </header>
    </div>
  );
}

export {AppUI}