import React from 'react'
import './header.css';
import logo from  './lwc.png'
function Header({setSearch,search}) {
    return (
        <div>
            <nav className=' pt-2 pb-2 shadow pr-10 pl-5 fixed top-0 w-full  flex justify-between items-center z-50'>
                <div className='flex'>
                <div className='w-9 mr-1'>
                    <img src={logo} alt="" />
                    </div>
                <h1 className="text-2xl font-bold clas text-black ubuntuMono ">SLDS|Cheatsheet</h1>
                </div>
                <div>
                    <input onChange={(e)=>setSearch(e.target.value)} value={search} type="text" placeholder='Search Here...' autoFocus className=' focus:outline-none text-gray-600 px-2 py-1 mx-2 border-2  rounded-md border-black'   />
                    <a href='https://www.lightningdesignsystem.com/'   className='border-2 arima border-black px-2 py-1 rounded-lg'>Goto SLDS</a>
                </div>
            </nav>

            <p className='text-4xl font-bold ubuntuMono text-black text-center mx-8 mt-20'>Salesforce Lightning Design System Cheetsheet</p>
            <p className='text-center arima  text-xl w-3/4 m-auto mb-8 mt-3'>The Salesforce Lightning Design System (SLDS) helps you build applications with the look and feel of Lightning Experience without writing a single line of CSS.</p>
        </div>
    )
}

export default Header