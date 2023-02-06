import React, {useState} from 'react'
import {useSignup} from '../hooks/useSignup' 

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async(e) => {
        e.preventDefault()
        await signup(email, password)
        
        
    }
  return (
         <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src='https://img.freepik.com/free-vector/man-sitting-desk-unlocking-computer-computer-settings-login-flat-illustration_74855-20645.jpg?w=2000' alt="" />
        </div>

        <div className='bg-gray-800 flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-red-600 p-8 px-8' onSubmit={handleSubmit}>
                <h2 className='text-4xl dark:text-white font-bold text-center'>SIGN UP</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label className='text-white'>Email</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-600 focus:outline-none' type="email"
                    onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label className='text-white'>Password</label>
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-600 focus:outline-none' type="password"
                    onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <button disabled={isLoading} className='w-full my-5 py-2 bg-white text-red-600 hover:bg-gray-900 hover:text-white font-semibold rounded-lg'>Sign up</button>
                {error &&  <div className='font-bold text-red-900 border border-red-900 rounded-lg bg-red-300 mt-2 p-2 focus:outline-none'>{error}...!</div>}
            </form>
        </div>
    </div>
  )
}

export default Signup