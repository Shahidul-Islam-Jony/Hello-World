import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";

const Links = () => {
    const [navOpen,setNavOpen] = useState(false);
    const [loginOpen,setLoginOpen] = useState(false);
    const [openShortCode,setOpenShortCode] = useState(false);


    return (
        <div className="flex md:flex-col gap-4 min-h-screen">

            {/* NAVBAR */}
    
            <div>
                <div className="flex flex-row justify-between bg-gray-200 p-2 cursor-pointer rounded-md" onClick={()=>setNavOpen(!navOpen)}>
                    <h4 className="text-xl font-medium">Navbar</h4>
                    <span className="text-xl font-medium">{navOpen? <IoIosArrowUp/>:<IoIosArrowDown />}</span>
                </div>
                {
                    navOpen? <div className="flex flex-col gap-1">
                        <Link className="border-2 border-pink-500" to='responsive-nav'>Responsive Navbar with 3 section</Link>
                        <Link className="border-2 border-pink-500" to='code'>code</Link>
                        <Link className="border-2 border-pink-500" to='/test2'>test2</Link>
                    </div>
                    :
                    <div></div>
                }
                
            </div>


            {/* Login */}
    
            <div>
                <div className="flex flex-row justify-between bg-gray-200 p-2 cursor-pointer rounded-md" onClick={()=>setLoginOpen(!loginOpen)}>
                    <h4 className="text-xl font-medium">Login</h4>
                    <span className="text-xl font-medium">{loginOpen? <IoIosArrowUp/>:<IoIosArrowDown />}</span>
                </div>
                {
                    loginOpen? <div className="flex flex-col gap-1">
                        <Link className="border-2 border-pink-500" to='transparent-login'>Transparent Login</Link>
                        <Link className="border-2 border-pink-500" to='code3'>code3</Link>
                        <Link className="border-2 border-pink-500" to='/tes4'>test4</Link>
                    </div>
                    :
                    <div></div>
                }
                
            </div>

            {/* Short Code */}
    
            <div>
                <div className="flex flex-row justify-between bg-gray-200 p-2 cursor-pointer rounded-md" onClick={()=>setOpenShortCode(!openShortCode)}>
                    <h4 className="text-xl font-medium">Short Code</h4>
                    <span className="text-xl font-medium">{loginOpen? <IoIosArrowUp/>:<IoIosArrowDown />}</span>
                </div>
                {
                    openShortCode? <div className="flex flex-col gap-1">
                        <Link className="border-2 border-pink-500" to='Test5'>Test5</Link>
                        <Link className="border-2 border-pink-500" to='Test6'>Test6</Link>
                        <Link className="border-2 border-pink-500" to='test7'>test7</Link>
                    </div>
                    :
                    <div></div>
                }
                
            </div>






           
        </div>
    );
};

export default Links;