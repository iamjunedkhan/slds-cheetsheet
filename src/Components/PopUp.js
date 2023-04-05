import React from 'react'
import './PopUp.css'
function PopUp({cls,visible}) {
  return (
    <div className={`border-2 z-50 ${visible} glow border-white text-white p-2 rounded-md fixed top-16 right-5`} >
        `{cls}` copied to your clipboard.
    </div>
  )
}

export default PopUp


