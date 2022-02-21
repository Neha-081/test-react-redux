import React from 'react'
import { useParams } from 'react-router-dom';

function TodoList() {
    const {todosid}=useParams()


  return (
    <div>
        <h2>ID NO- {todosid}</h2>
        {/* <h2>Title- {title}</h2>
        <h4>Status- {status?"completed":"pending"}</h4> */}
    </div>
  )
}

export default TodoList