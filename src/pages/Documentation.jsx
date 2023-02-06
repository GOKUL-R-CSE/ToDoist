import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

const Documentation = () => {
  return (
    <>
      <NavBar />
      <div className='py-6 px-10'>
        <img className="float-right w-[600px] h-[200px] border-4 border-gray-500" src={require("../images/main.png")} alt='main' />
        <div className='p-10'>
          <p className='text-xl font-semibold'>Create a new task by filling the title, description and the end date for its completion.</p>
        <p className='text-xl mt-1'><strong>( note : all fields are required )</strong></p>
        <p className='text-xl mt-1 font-semibold'>Based on the date you have specified, the task will assigned in the respective block.</p>
        </div>
      </div>
        <div className='py-6 px-12 mt-8'>
        <img className="float-left w-[600px] h-[200px] border-4 border-gray-500 mr-7" src={require("../images/inbox.png")} alt='main' />
        <div className='p-7 right-0'>
          <p className='text-xl font-semibold'>This section contains the overall tasks that has been assigned by the user with properties and operations to be performed.</p>
          <p className='text-xl mt-1'><strong>( operation : delete and complete )</strong></p>
        <p className='text-xl mt-1 font-semibold'>If the tasks is completed it will be removed from inbox and set in the completed section, and when deleted it will be removed from the tasks list.</p>
        </div>
      </div>
            <div className='py-6 px-10'>
        <img className="float-right w-[600px] h-[200px] border-4 border-gray-500" src={require("../images/today.png")} alt='main' />
        <div className='p-10'>
          <p className='text-xl font-semibold'>This section contains only the current day tasks that has been assigned by the user with properties and operations to be performed.</p>
        <p className='text-xl mt-1'><strong>( operation : delete and complete )</strong></p>
        <p className='text-xl mt-1 font-semibold'>If the tasks is completed it will be removed from inbox and set in the completed section, and when deleted it will be removed from the tasks list.</p>
        </div>
      </div>
              <div className='py-6 px-12 mt-8'>
        <img className="float-left w-[600px] h-[200px] border-4 border-gray-500 mr-7" src={require("../images/upcoming.png")} alt='main' />
        <div className='p-7 right-0'>
          <p className='text-xl font-semibold'>This section contains the tasks with completion date is the next day that has been assigned by the user with properties and operations to be performed.</p>
          <p className='text-xl mt-1'><strong>( operation : delete and complete )</strong></p>
        <p className='text-xl mt-1 font-semibold'>If the tasks is completed it will be removed from inbox and set in the completed section, and when deleted it will be removed from the tasks list.</p>
        </div>
      </div>
                  <div className='py-6 px-10'>
        <img className="float-right w-[600px] h-[200px] border-4 border-gray-500" src={require("../images/completed.png")} alt='main' />
        <div className='px-10 py-4'>
          <p className='text-xl font-semibold'>This section contains only the completed tasks that has been set as done by the user with only one operation delete.</p>
        <p className='text-xl mt-1'><strong>( operation : delete )</strong></p>
        <p className='text-xl mt-1 font-semibold'>If the task has to be removed from the entire lists after completion it can be done in this section.</p>
        <p className='text-xl mt-1 font-semibold'>It is used to make the list of completed task for the acknowledgement of the user.</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Documentation