import React from 'react'
import Para from './Para'
import './card.css'

function Card({data,setCopyClass,setVisible}) {
    return (
        // <div>
            <div class="p-2 w-full sm:w-1/2 lg:w-1/4 md:w-1/3  ">
                <div class=" p-3 bg-slate-300 rounded-md ">
                    <h1 class="bg-slate-200 rounded-md px-2 py-1">{data.title}</h1>
                    <div class="m-2">
                      
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