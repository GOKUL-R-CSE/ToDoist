import React from 'react'
import { Link } from 'react-router-dom'
import {useLogout} from '../hooks/useLogout'


const NavBar = () => {
    const {logout} = useLogout()
    const handleClick = () => {
        logout()
    }

    return (
        <>
                  <section className ='w-screen sticky top-0 z-[999] bg-white'>
               <nav className ='align-middle top-0 w-100 shadow-lg shadow-gray-400'>
                <div className ='flex justify-between'>
                    <div className ='h-12 align-middle'>
                        <Link to='/home'><img src='https://st2.depositphotos.com/5943796/11433/v/950/depositphotos_114331696-stock-illustration-initial-letter-rk-red-swoosh.jpg' alt='logo' 
                        className ='bg-cover bg-center w-35 flex container h-12 flex-1 text-center ml-8 m-1'/></Link>
                    </div>
                    <div className ='h-12 align-middle mr-20 mt-1 mb-1'>
                        <ul className ='flex justify-around h-12' >
                            <li className ='p-3 hover:bg-red-600 hover:text-white hover:border-double hover:rounded-3xl'><i className="fa-solid fa-house-chimney mr-2"></i><Link to='/home'>Home</Link></li>
                            <li className ='p-3 hover:bg-red-600 hover:text-white hover:border-double hover:rounded-3xl'><i className="fa-solid fa-file mr-2"></i><Link to='/documentation'>Documentation</Link></li>
                            <li className ='p-3 hover:bg-red-600 hover:text-white hover:border-double hover:rounded-3xl'><i className="fa-sharp fa-solid fa-address-card mr-2"></i><Link to='/about'>About</Link></li>
                            
                            <li onClick={handleClick} className='bg-red-600 text-white hover:bg-gray-500 hover:rounded-3xl hover:border-double p-3 ml-6 rounded-2xl'>Log out<i className="fa-solid fa-arrow-right-from-bracket ml-2"></i></li>
                        </ul>
                    </div>
                </div>
            </nav>
         </section>
        </>
    )
}


export default NavBar