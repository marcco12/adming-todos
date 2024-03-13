import prisma from '@/lib/prisma';
import { NewTodo, TodosGrid } from '@/todos';
import React from 'react'


export const metadata = {
 title: 'Listado de Todos',
 description: 'Listado de Todos',
};

const ServerTodosPage = async () => {

  const todos = await prisma.todo.findMany({orderBy: {description: 'asc'}});
  console.log(todos);

  return (
    <>
      <span className='text-3xl mb-10'>SERVER ACTIONS</span>
      <div className='w-full px-3 mx-5 mb-5'>
        <NewTodo />
      </div>

      <TodosGrid todos={todos}/>
    </>
  )
}

export default ServerTodosPage