import Link from 'next/link';
import React from 'react'
import { Todo } from '../../typings';

const fechTodos = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/tools/")
    const todos: Todo[] = await res.json();
    return todos;
}

async function TodosList() {
    const todos = await fechTodos()

  return <>
    {todos.map((todo) => (
        <p key ={todo.id}>
            <Link href = {'/todos/${todo.id}'}>Todo: {todo.id}</Link>
        </p>
    ))}
  </>
}

export default TodosList