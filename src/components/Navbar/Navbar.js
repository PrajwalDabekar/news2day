import React, { useState } from "react";
import {Link} from 'react-router-dom'

function Navbar() {
    const [active , setActive] = useState("home")
    const handleCLick = (btn)=>{
        setActive(btn)
    }
    return(
        <div className="flex flex-col h-screen w-[200px] py-2 items-center space-y-4 bg-gray-50">
            <div className="font-semibold text-xl text-blue-400 text-center font-sans italic">
                News2Day
            </div>
        <Link
        to='/'
        onClick={()=> handleCLick('home')}
        className={active === 'home' ? 'w-[180px] text-center text-white bg-blue-400 px-8 py-2 rounded-md' : 'py-2 text-black' }
        >Home</Link>
        <Link
        to='/manage'
        onClick={()=> handleCLick('track')}
        className={active === 'track' ? 'w-[180px] text-center text-white bg-blue-400 px-8 py-2 rounded-md' : 'text-black' }      
        >Manage</Link>
        <Link
        to='/add'
        onClick={()=> handleCLick('add')}
        className={active === 'add' ? 'w-[180px] text-center text-white bg-blue-400 px-8 py-2 rounded-md' : 'text-black' } 
        >add</Link>
        <Link
        to='profile'
        onClick={()=> handleCLick('profile')}
        className={active === 'profile' ? 'w-[180px] text-center text-white bg-blue-400 px-8 py-2 rounded-md' : 'text-black' } 
        >Statistics</Link>
        </div>
    )
}
export default Navbar