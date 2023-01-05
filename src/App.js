import React, { useState, useRef, useEffect } from "react";
import TodoList from "./componets/TodoList";
import axios from "axios"
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'

const MAX = 10e6;
const LOCAL_STORAGE_KEY = 'todosApp.todo'


const POST_URL = "http://127.0.0.1:8000/api/posts/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjczMTA0Nzk2LCJpYXQiOjE2NzI5MjgzOTYsImp0aSI6ImI2OGUxNjE3NDUwMDQ2MWM5MTk5YTc1MTdmOTZkZDkxIiwidXNlcl9pZCI6MX0._h1NOa3xS8mDeQRAkjzU0ctpe7TGDA-DSI2IDvDTOoc"


const uuidv4 = function(){
  return Math.floor(Math.random() * MAX)
}


function FetchComponent(){
  const [data, setData] = useState(null);

  const handleClick = async () => {
    let headers = new Headers();
    headers.append("Authorization", `Bearer ${TOKEN}`)
    const response = await axios.get(POST_URL, {
      mode: 'no-cors',
    });
    const data = await response.data;
    console.log(data, "DATA")
    setData(data)
  }

  return (
    <div>
      <Button variant="contained"  onClick={handleClick}>Get Data</Button>
      {data ? (
        <div>{data.message}</div>
      ) : (
        <div>No data</div>
      )}
    </div>

  );
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
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTodos))
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
      <FetchComponent></FetchComponent>
    </>
  );
}

export default App;
