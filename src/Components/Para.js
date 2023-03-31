import React from 'react'

function Para({ cls, setCopyClass,setVisible }) {
  function handleClick(event) {
    setCopyClass(event.target.innerText);
    setVisible('block');
    setTimeout(()=>{

        setVisible('hidden');
    },2000);
    navigator.clipboard.writeText(event.target.innerText);
  }
  return (
    <div onClick={handleClick} className='cursor-pointer transition-all duration-200 hover:font-bold border-b-2 p-1 py-2 pb-1 border-gray-500'>
      {cls}</div>
  )
}

export default Para