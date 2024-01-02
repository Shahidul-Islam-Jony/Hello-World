import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FaClipboardList } from "react-icons/fa";
import responsiveNav from '../../../assets/images/Navbar/responsiveNav.png'

const ResponsiveNav = () => {

    const codeString = `
    
    import { Link, NavLink } from 'react-router-dom';
    import { IoMdLogIn } from "react-icons/io";
    
    const Navbar = () => {
    
        const links = <div className='flex flex-col gap-5 lg:flex-row text-lg font-medium'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/shop'>Shop</NavLink>
            <NavLink to='/cart'>Cart</NavLink>
            <NavLink to='/about-us'>About Us</NavLink>
            <NavLink to='/contact-us'>Contact Us</NavLink>
        </div>
    
        return (
            <div>
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
                            <h4 className='text-2xl w-32 md:w-fit md:text-4xl font-extrabold font-carattere bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text px-1'>Sport Sphare</h4>
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
    
    export default Navbar;`;


    const [copy, setCopy] = useState(false);

    return (
        <div>
            <div>
                <img src={responsiveNav} alt="" />
            </div>
            <div className='bg-gray-500 max-w-5xl min-w-[25rem] rounded-md overflow-hidden'>
                <div className='flex justify-between px-4 py-2 text-white '>
                    <p>Code</p>
                    {
                        copy ? <button>Copied !</button> : <button className='flex justify-center items-center gap-1' onClick={() => {
                            navigator.clipboard.writeText(codeString);  //For copy code
                            setCopy(true)   //copy (true) hoise bujhate
                            setTimeout(() => {
                                setCopy(false)  // 3s pore abar copy button show korte
                            }, 5000)
                        }}><FaClipboardList /> Copy code</button>
                    }
                </div>
                <SyntaxHighlighter language="jsx" style={atomOneDark} customStyle={{
                    padding: '20px'
                }}
                // wrapLongLines={true}
                >
                    {codeString}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

export default ResponsiveNav;