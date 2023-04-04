import React, { forwardRef } from 'react'
import Para from './Para'
import './card.css'

const Card = forwardRef((props, ref) => (
    <div ref={ref}>

    <div class="p-2  " >
        <div class=" p-3 bg-slate-300 rounded-md ">
            <h1 class="ubuntu bg-slate-200 rounded-md px-2 py-1">{props.data.title}</h1>
            <div class="m-2 signika">

                {props.data.classes.map(ele => {
                    return <Para key={ele} cls={ele} setCopyClass={props.setCopyClass} setVisible={props.setVisible} />

                })
                }

            </div>
        </div>
    </div>

    </div>)
)

export default Card