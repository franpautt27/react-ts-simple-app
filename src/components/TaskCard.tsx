import React from 'react'
import { Task } from '../interfaces/Task'

interface Props {
    task: Task;
    deleteATask: (id: number) => void;
}

export default function TaskCard({task, deleteATask}: Props): JSX.Element {
  return (
    <div className='card card-body bg- text-dark rounded-0'>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <p>{task.id}</p>
        <button onClick={()=> task.id && deleteATask(task.id)} className='btn btn-danger'>Delete</button>
    </div>
  )
}
