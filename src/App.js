import React, {useState} from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([{id: 1, name:"Todo 1", complete: true}, {id: 2, name:"Todo 2", complete:false}])
  return (
    <> 
      <TodoList todos={todos}/>
      <input type="text"/>
      <button>Add Todo</button>
      <button>Clear Complete</button>
      <div>0 left todos</div>
    </>
  );
}

export default App;
