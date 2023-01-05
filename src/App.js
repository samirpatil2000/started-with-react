import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";

const MAX = 10e6;
const LOCAL_STORAGE_KEY = 'todosApp.todo'
const uuidv4 = function(){
  return Math.floor(Math.random() * MAX)
}

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    console.log(storedTodos)
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    if (todos.length === 0) return
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    console.log(todos, "Todos")
  }, [todos])


  function toggleTodo(id){
    const newTodos = [...todos]
    const todo = newTodos.find(
      todo => todo.id === id
    )
    todo.complete = !todo.complete
    setTodos(newTodos)
  }
  
  function handleAddTodo(e){
      const name = todoNameRef.current.value
      if (name === "" || name === NaN) return
      setTodos(
        prevTodos => {
          return [...prevTodos, {id:uuidv4(), name: name, complete:false}]
        }
      )
      todoNameRef.current.value = ""
  }
  function toggleAllTodo(){
    todos.map(todo => toggleTodo(todo.id))
  }

  function clearCompleteTodo(){
    const newTodos = todos.filter(todo => !todo.complete)
    console.log(newTodos)
    setTodos(newTodos)
  }

  function countTodos(){
    return todos.filter(todo => todo.complete === false).length
  }
  
  return (
    <> 
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input ref={todoNameRef} type="text"/>
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={toggleAllTodo}>Toggle Todo</button>
      <button onClick={clearCompleteTodo}>Clear Complete</button>
      <div> {countTodos()} left todos</div>
    </>
  );
}

export default App;
