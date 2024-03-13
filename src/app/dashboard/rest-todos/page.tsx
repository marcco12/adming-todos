import prisma from '@/lib/prisma';
import { NewTodo, TodosGrid } from '@/todos';
import React from 'react'


export const metadata = {
 title: 'Listado de Todos',
 description: 'Listado de Todos',
};

const RestTodosPage = async () => {

  const todos = await prisma.todo.findMany({orderBy: {description: 'asc'}});

  return (
    <div>

      <div className='w-full px-3 mx-5 mb-5'>
        <NewTodo />
      </div>

      <TodosGrid todos={todos}/>
    </div>
  )
}

export default RestTodosPage