import { useEffect } from "react"
import { useTasksContext } from "../hooks/useTaskContext"
import { useAuthContext } from "../hooks/useAuthContext"

// components
import TaskDetails from "../Components/TaskDetails"
import NavBar from "../Components/NavBar"
import SideBar from "../Components/SideBar"


const Inbox = () => {
    const {user} = useAuthContext()
  const { tasks, dispatch } = useTasksContext()

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch('https://todoist-backend-production.up.railway.app/api/task', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
        }
      })
      const json = await response.json()
      console.log(json)

      if (response.ok) {
        dispatch({type: 'SET_TASKS', payload: json})
      }
    }
    if(user){
        
    fetchTasks()
    }
  }, [dispatch, user])

  return (
    <>

        <NavBar />
        <div className="flex gap-6">
            <SideBar />
            <div className="mt-10 ml-8 px-4">
                <div><h1 className='font-semibold text-2xl'>All Tasks</h1></div>
                <div className="gap-24">
                    <div className="">
                        {tasks && tasks.map(task => (
                        <TaskDetails task={task} key={task._id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Inbox
