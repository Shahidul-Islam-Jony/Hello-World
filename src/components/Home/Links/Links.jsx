import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";

const Links = () => {
    const [navOpen,setNavOpen] = useState(false);
    const [open,setOpen] = useState(false);


    return (
        <div className="flex md:flex-col gap-4 min-h-screen">

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


            <div>
                <div className="flex flex-row justify-between bg-gray-200 p-2" onClick={()=>setOpen(!open)}>
                    <h4 className="text-xl font-medium">Test Code</h4>
                    <span className="text-xl font-medium">{open? <IoIosArrowUp/>:<IoIosArrowDown />}</span>
                </div>
                {
                    open? <div className="flex flex-col gap-1">
                        <Link className="border-2 border-pink-500" to='code1'>Test3</Link>
                        <Link className="border-2 border-pink-500" to='/test4'>test4</Link>
                        <Link className="border-2 border-pink-500" to='/test5'>test5</Link>
                    </div>
                    :
                    <div></div>
                }
                
            </div>





           
        </div>
    );
};

export default Links;