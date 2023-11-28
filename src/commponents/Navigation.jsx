import { useState } from 'react';
import logo from '../assets/images/acubed-logo.jpeg'
import { FaXmark } from "react-icons/fa6";
import { GrLanguage } from "react-icons/gr";
import { FaBars } from "react-icons/fa6";

function Navigation() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const navItems = [
        {link:"Task", path:"home"},
        {link:"Feature", path:"Feature"},
        {link:"About", path:"About"},
        {link:"Pricing", path:"Pricing"},
    ]


    return (
        <>
        <nav className='bg-white md:px-14 p-4 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 right-0 left-0'>
            <div className='text-lg container mx-auto flex justify-between items-center font-medium '>
                <div className='flex space-x-14 items-center'>
                    {/* mapping the items */}
                    {/* <ul className='md:flex space-x-12 hidden'>
                        {
                            navItems.map(({link, path}) => <a key={link} href='path' className='block hover:text-gray-300'>{link}</a>)
                        }
                    </ul> */}
                </div>
                <div className='space-x-12 hidden md:flex items-center'>
                    <button className='bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600'>Login</button>
                </div>
                {/* menu of the mobile version */}
                <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-300'>
                           {
                            isMenuOpen ? (<FaXmark className='w-6 h-6 text-primary'/>) : (<FaBars className='w-6 h-6 text-primary'/>)
                           }
                        </button>
                </div>
            </div>
        </nav>
        <div className={`space-y-4 px-4 pt-24 pb-5 bg-secondary text-xl ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}` }>
                {
                    navItems.map(({link, path}) => <a key={link} href='path' className='block hover:text-gray-300'>{link}</a>)
                }            
        </div>
        </>
    )
};
export default Navigation;