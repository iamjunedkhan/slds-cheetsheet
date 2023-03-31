import React from 'react'

function Header({setSearch,search}) {
    return (
        <div>
            <nav className='text-white pt-2 pb-2 border-b-2 border-white pr-10 pl-5 flex justify-between items-center'>
                <h1 className="text-2xl font-bold">SLDS</h1>
                <div>
                    <input onChange={(e)=>setSearch(e.target.value)} value={search} type="text" className=' focus:outline-none text-gray-600 px-2  mx-2 border-2  rounded-md border-white'  />
                    <button className='border-2 border-white px-2 rounded-lg'>Search</button>
                </div>
            </nav>

            <p className='text-3xl font-bold text-white text-center m-8'>Salesforce Lightning Design System </p>
        </div>
    )
}

export default Header