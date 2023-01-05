import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'

const MAX = 10e6;
const LOCAL_STORAGE_KEY = 'todosApp.todo'
const uuidv4 = function(){
  return Math.floor(Math.random() * MAX)
}

function App() {
  const [todos, setTodos] = useState([])
  const inputTodoRef = useRef()

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
      console.log("Clicked..!")
      const name = inputTodoRef.current.value
      if (name === "" || name === NaN || name === undefined) return
      setTodos(
        prevTodos => {
          return [...prevTodos, {id:uuidv4(), name: name, complete:false}]
        }
      )
      inputTodoRef.current.value = ""
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
      
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField id="outlined-basic" label="Task" variant="outlined" 
                inputRef={inputTodoRef} type="text" 
                inputProps={
                  {
                    style: {height: "9px"}
                  }
                }/>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" onClick={handleAddTodo}>Add Todo</Button>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Button variant="contained" onClick={toggleAllTodo}>Toggle Todo</Button>  
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" onClick={clearCompleteTodo}>Clear Complete</Button>
        </Grid>
      </Grid>
      
      <div> {countTodos()} left todos</div>
    </>
  );
}

export default App;
