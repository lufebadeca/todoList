import { Counter } from "../counter/counter";
import SearchInput from "../SearchInput/SearchInput";
import { TodoList } from "../todoList/todoList";
import { ListItem } from "../listItem/listItem";

const AppUI = ( {completed, total, filteredList, searchValue, updateSearchVal, toggleTask, handleClearByID, loading, error} ) => {
return (
    <div className="App">
      <header className="App-header">

        <Counter completed={completed} total={total} ></Counter>

        <SearchInput searchValue={searchValue} updateSearchVal={updateSearchVal}></SearchInput>
        
        <TodoList
          list={filteredList}
          toggleTask={toggleTask}
          handleClearByID={handleClearByID}
          loading={loading}
          error={error}>
        </TodoList>

        <button className='addButton' data-message="Click me to submit"><i className='bi bi-plus' ></i></button>

      </header>
    </div>
  );
}

export {AppUI}