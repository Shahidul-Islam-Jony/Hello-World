import { Link, NavLink } from 'react-router-dom';
// import logo from '../../../assets/images/logo3.png'
import { IoMdLogIn } from "react-icons/io";

const Navbar = () => {

    const links = <div className='flex flex-col gap-5 lg:flex-row text-lg font-medium'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/show'>Show</NavLink>
        <NavLink to='/read-docs'>Read Docs</NavLink>
        <NavLink to='/feedback'>Feedback</NavLink>
    </div>

    return (
        <div className='mb-10'>
            <div className="navbar bg-base-100 sticky shadow-lg rounded-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <div className='flex flex-row items-center gap-4'>
                        <img src='' className='w-20 h-16 hidden md:block' alt="" />
                        <h4 className='text-2xl w-32 md:w-fit md:text-4xl font-extrabold font-carattere bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text px-1'>Hello World</h4>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                      {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/login' className='btn btn-outline btn-sm lg:btn-md w-28 font-bold text-pink-500 border-pink-500 border-2 hover:bg-pink-500'><IoMdLogIn className='text-xl' /><span className='text-base md:text-lg'>Login</span></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;