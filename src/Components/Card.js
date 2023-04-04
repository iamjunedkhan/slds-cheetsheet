import React from 'react'
import Para from './Para'
import './card.css'

function Card({data,setCopyClass,setVisible}) {
    return (
        // <div>
            <div class="p-2  ">
                <div class=" p-3 bg-slate-300 rounded-md ">
                    <h1 class="ubuntu bg-slate-200 rounded-md px-2 py-1">{data.title}</h1>
                    <div class="m-2 signika">
                      
                      {data.classes.map(ele=>{
                            return <Para key={ele} cls={ele} setCopyClass={setCopyClass} setVisible={setVisible} />
                        
                        })
                      }
                      
                     </div>
                </div>
            </div>
        // </div>
    )
}

export default Card