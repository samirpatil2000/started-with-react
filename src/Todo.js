import React from 'react'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'


export default function Todo({todo, toggleTodo}) {
    function handleTodoClick(){
        toggleTodo(todo.id)
    }
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={0}>
                    <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
                </Grid>
                <Grid item xs={8}>
                    <Box sx={{color: 'info.main', height: '30px'}}>{todo.name}</Box>
                </Grid>
            </Grid>
        </div>
    )
}
