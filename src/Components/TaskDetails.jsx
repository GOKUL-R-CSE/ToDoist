import {format} from 'date-fns'

// import Completed from '../pages/Completed'
import { useTasksContext } from '../hooks/useTaskContext'
import { useAuthContext } from '../hooks/useAuthContext'
// import { useEffect, useState } from 'react'


const TaskDetails = ({ task }) => {
    const {user} = useAuthContext()
  const { dispatch } = useTasksContext()

  const handleClick = async () => {

    if(!user){
        return
    }

    const response = await fetch('http://localhost:8080/api/task/' + task._id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_TASKS', payload: json})
    }
  }

  const handleComplete = async () => {
      if(!user){
        return
    }
    const tasks = {completed: true}

    const response = await fetch('http://localhost:8080/api/task/' + task._id, {
      method: 'PATCH',
      body: JSON.stringify(tasks),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'COMPLETE_TASKS', payload: json})
    }
    window.location.reload(false)
  }
  

  return (
    <div className="bg-white border-0 m-5 p-5 relative shadow-lg shadow-yellow-400 w-[800px]">
      <h4 className='mb-3 text-xl text-gray-700 font-bold'>{task.title}</h4>
      <div className='overflow-clip w-[600px]'>
        <p className='m-0 text-sm text-gray-500'><strong>Description : </strong>{task.desc}</p>
      </div>
      <p className='m-0 mt-2 text-sm text-gray-500'><strong>Completion date : </strong>{task.date}</p>
      <p className='m-0 mt-2 text-sm text-gray-500'><strong>Created At : </strong> {format(new Date(task.createdAt), 'MMMM do, yyyy H:mma')}</p>
      <span className="absolute top-5 right-5 cursor-pointer p-3 rounded-full bg-red-300 text-red-800 font-semibold" onClick={handleClick}>delete<i className="fa-solid fa-xmark ml-2 text-red-800"></i></span>
      <span className="absolute mt-4 top-16 right-4 cursor-pointer p-3 rounded-full bg-green-300 text-green-800 font-semibold" onClick={handleComplete}>complete<i className="fa-solid fa-check ml-2 text-green-800"></i></span>
    </div>
  )
}

export default TaskDetails