import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [open, setOpen] = useState(true)
    return (
        <header className=' flex md:justify-between px-6 bg-yellow-400 items-center text-xl sticky top-0'>
            <div className=' py-6'>
                <img className=' w-[50%] md:w-[100%]' src={logo} alt="" />
            </div>
            <div className={`md:gap-4 absolute md:static ${!open ? 'top-16' : 'top-[-220px]'} left-0 text-center bg-yellow-400 w-screen md:w-auto  flex flex-col md:flex-row text-gray-500`}>
                <Link to='/'>Home</Link>
                <Link to='/home#experts'>Experts</Link>
                <Link to='#services'>Services</Link>
                <Link to='/about'>About</Link>
                <button className=' px-6 py-2 mb-4 bg-white rounded-full mx-auto  md:hidden'>Login</button>
            </div>
            <div className=' hidden md:flex md:justify-end'>
                <Link to='/login'>
                    <button>Login</button>
                </Link>
                <Link to='/signup'><button className=' px-4 py-2 bg-white rounded-full ml-6'>Sign up</button></Link>
            </div>
            <div onClick={() => setOpen(!open)} className=' '>
                {open ? <FontAwesomeIcon className=' text-white absolute top-4 right-6 md:hidden text-2xl' icon={faToggleOff} /> : <FontAwesomeIcon className=' text-white absolute top-4 right-6 md:hidden text-2xl' icon={faToggleOn} />}
            </div>
        </header>
    );
};

export default Header;