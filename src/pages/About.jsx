import React from 'react'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'

const About = () => {
  return (
    
    <>
      <NavBar />
                    <div className='conatiner w-screen align-middle grid v-screen place-items-center over mt-6'>
                <div className="max-w-screen h-[450px] rounded shadow-2xl bg-gradient-to-r from-red-600 to-red-500 flex">
                    <div>
                        <img src='https://img.freepik.com/free-vector/hand-drawn-business-planning-with-task-list_23-2149164275.jpg' alt='...'
                            className='h-[450px]' />
                    </div>
                    <div className='p-4 mt-5 w-4/5 min-w-full md:min-w-0 max-w-md break-words'>
                        <h3 className='text-white px-3 font-semibold text-lg'></h3>
                        <div className="mt-8">
                        <div className="max-w-sm grid-cols-1 mx-auto text-center divide-y shadow-md conatiner p-2 text-white grid v-screen place-items-center">
                            <p className="lead font-bold p-2"></p>
                            <p className="lead font-bold p-2"></p>
                        </div>
        
                        <div className="container grid v-screen place-items-center"></div>
                            <div className='px-2 mt-10 bottom-8 container grid v-screen place-items-center mb-4'>

                            </div>
                        <div className='container grid v-screen place-items-center mt-3'>
 
                        </div>
                        </div>
                    </div>
                </div>
            </div>
      <Footer />
    </>
  )
}

export default About