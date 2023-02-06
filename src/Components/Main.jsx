
import React from 'react'
import { Link } from 'react-router-dom'

function Login() {

    return (
        <>
            <div className='conatiner align-middle grid v-screen place-items-center over min-w-full md:min-w-0 mt-10'>
                <div className="max-w-2xl rounded shadow-2xl bg-gradient-to-r from-red-600 to-red-500 flex">
                    <div>
                        <img src='https://img.freepik.com/free-vector/men-success-laptop-relieve-work-from-home-computer-great_10045-646.jpg?w=2000' alt='login'
                            className='h-96' />
                    </div>
                    <div className='p-4 mt-5 w-4/5 min-w-full md:min-w-0 max-w-md break-words'>
                        <h3 className='text-white px-3'><i className="fa-solid fa-right-to-bracket p-3"></i>Account Login / Signup</h3>
                        <div className="mt-8">
                        <div className="max-w-sm grid-cols-1 mx-auto text-center divide-y shadow-md conatiner p-2 text-white grid v-screen place-items-center">
                            <p className="lead font-bold p-2">Welcome to ToDoist</p>
                            <p className="lead font-bold p-2">!__ Get started with the application __!</p>
                        </div>
        
                        <div className="container grid v-screen place-items-center"></div>
                            <div className='px-2 mt-10 bottom-8 container grid v-screen place-items-center mb-4'>
                                <Link to="/login">
                                    <a href='/login' className="btn bg-white hover:bg-gray-500 hover:text-white text-red-600 text-xl rounded-lg p-3">
                                        Login<i className="fa-solid fa-arrow-right p-3"></i>
                                    </a>
                                </Link>
                            </div>
                        <div className='container grid v-screen place-items-center mt-3'>
                                <Link to="/signup">
                                    <a href='/signup' className="btn bg-white hover:bg-gray-500 hover:text-white text-red-600 text-xl rounded-lg p-3">
                                        Signup<i className="fa-solid fa-arrow-right p-3"></i>
                                    </a>
                                </Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login