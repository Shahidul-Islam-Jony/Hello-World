import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";

const Links = () => {
    const [open,setOpen] = useState(false);
    return (
        <div className="flex md:flex-col gap-4 min-h-screen">

            <div>
                <div className="flex flex-row justify-between bg-gray-200 p-2" onClick={()=>setOpen(!open)}>
                    <h4 className="text-xl font-medium">Short Code</h4>
                    <span className="text-xl font-medium">{open? <IoIosArrowUp/>:<IoIosArrowDown />}</span>
                </div>
                {
                    open? <div className="flex flex-col">
                        <Link to='code'>code</Link>
                        <Link to='/test1'>test1</Link>
                        <Link to='/test2'>test2</Link>
                    </div>
                    :
                    <div></div>
                }
                
            </div>





            <Link>Hello</Link>
            <Link>Hello</Link>
        </div>
    );
};

export default Links;