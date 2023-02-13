/* eslint-disable no-unused-vars */


import React, { useState } from 'react'
import NavBar from '../Components/NavBar'
import SideBar from '../Components/SideBar'
import {useTasksContext} from '../hooks/useTaskContext'
import { useAuthContext } from '../hooks/useAuthContext'


const Home = () => {
  const {user} = useAuthContext()
  const {dispatch} = useTasksContext()

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [date, setDate] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

const handleClick = async(e) => {
  e.preventDefault()

  if(!user){
    setError('You must be logged in ..!')
    return
  }

  const task = {title, desc, date}
  const response = await fetch('https://todoist-backend-production.up.railway.app/api/task',{
    method: 'POST',
    body: JSON.stringify(task),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${user.token}`
    }
  })

  const json = await response.json()

  if(!response.ok){
    setError(json.error)
    setEmptyFields(json.emptyFields)
  }

  if(response.ok){
  setTitle('')
  setDesc('')
  setDate('')
  setError(null)
  setEmptyFields([])
  dispatch({type: 'CREATE_TASK', payload: json})
  }
}

  return (
   <>
    <NavBar />
    <div className='flex gap-6'>
      <SideBar />
      <div className='mt-10 ml-8 px-4'>
        <div><h1 className='font-semibold text-2xl'>Add Task</h1></div>
          <div className="relative mt-14">
            <textarea rows='1' type="text" name="title" className="peer border-b py-1 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-red-600 w-[750px] bg-transparent" autoComplete="off" 
            onChange={(e) => setTitle(e.target.value)} value={title}/>
            <label htmlFor="title" className="absolute left-0 -top-7 text-gray-600 transition-all peer-focus:text-xs peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-5 peer-focus:-top-5 peer-focus:text-red-600">Title</label>
          </div>
          <div className="relative mt-14">
            <textarea type="text" rows='1' name="username" className={`peer border-b py-1 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-red-600 w-[750px] bg-transparent`} autoComplete="off" 
            onChange={(e) => setDesc(e.target.value)} value={desc}/>
            <label htmlFor="username" className="absolute left-0 -top-7 text-gray-600 transition-all peer-focus:text-xs peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-5 peer-focus:-top-5 peer-focus:text-red-600">Description</label>
      </div>
      <div className="relative mt-14">
      <input type="datetime-local" id="start" name="end-date"
       min="2023-01-31" max="2030-12-31" className="peer border-b py-1 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-red-600 w-[350px] mt-10 bg-transparent"
       onChange={(e) => setDate(e.target.value)} value={date}/>
       <label htmlFor="end-date" className=" absolute left-0 -top-0 text-gray-600 transition-all peer-focus:text-xs peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-1 peer-focus:text-red-600">To be completed within</label>
      </div>
      {error &&  <div className='border-none font-bold text-red-700 border rounded-lg mt-10 p-2 focus:outline-none'>{error}...!</div>}
      <div className='relative mt-8'>
        <button className='w-[300px] my-5 py-2 bg-red-600 text-white hover:bg-gray-500 hover:text-white font-semibold rounded-lg' onClick={handleClick}>Assign task</button>
      </div>
      </div>
                <div className='container mx-auto mt-3'>
        <img src='https://vision.org.au/campaigns/wp-content/uploads/sites/13/2018/08/Superbook_Paralax_BG_03-1080x1080.jpg' alt='' className='v-screen h-screen border-2 w-full object-none object-right rotate-180' />
      </div>
    </div>
   </>
  )
}

export default Home