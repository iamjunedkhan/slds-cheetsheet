import React from 'react'
import './header.css';
function Header({setSearch,search}) {
    return (
        <div>
            <nav className=' pt-2 pb-2 shadow pr-10 pl-5 fixed top-0 w-full  flex justify-between items-center'>
                <h1 className="text-2xl font-bold clas text-black ">SLDS</h1>
                <div>
                    <input onChange={(e)=>setSearch(e.target.value)} value={search} type="text" className=' focus:outline-none text-gray-600 px-2 py-1 mx-2 border-2  rounded-md border-black'   />
                    <a href='https://www.lightningdesignsystem.com/'   className='border-2 border-black px-2 py-1 rounded-lg'>Goto SLDS</a>
                </div>
            </nav>

            <p className='text-4xl font-bold text-black text-center mx-8 mt-20'>Salesforce Lightning Design System </p>
            <p className='text-center text-xl w-3/4 m-auto mb-8 mt-3'>The Salesforce Lightning Design System (SLDS) helps you build applications with the look and feel of Lightning Experience without writing a single line of CSS.</p>
        </div>
    )
}

export default Header