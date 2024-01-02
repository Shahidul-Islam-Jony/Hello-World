import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FaClipboardList } from "react-icons/fa";

const ResponsiveNav = () => {

    const codeString = ` paste your code here `;


    const [copy,setCopy] = useState(false);

    return (
        <div className='bg-gray-500 max-w-5xl min-w-[25rem] rounded-md overflow-hidden'>
            <div className='flex justify-between px-4 py-2 text-white '>
                <p>Code</p>
                {
                    copy? <button>Copied !</button>:<button className='flex justify-center items-center gap-1' onClick={()=>{
                    navigator.clipboard.writeText(codeString);  //For copy code
                    setCopy(true)   //copy (true) hoise bujhate
                    setTimeout(()=>{
                        setCopy(false)  // 3s pore abar copy button show korte
                    },5000)
                }}><FaClipboardList /> Copy code</button>
                }
            </div>
            <SyntaxHighlighter language="jsx" style={atomOneDark} customStyle={{
                padding:'20px'
            }}
            // wrapLongLines={true}
            >
                {codeString}
            </SyntaxHighlighter>
        </div>
    );
};

export default ResponsiveNav;