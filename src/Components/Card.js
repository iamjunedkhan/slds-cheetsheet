import React, { forwardRef } from 'react'
import Para from './Para'
import FlipMove from 'react-flip-move';

import './card.css'

const Card = forwardRef((props, ref) => (

    <div ref={ref}>

        <div class="p-2  " >
            <div class=" p-3 bg-slate-300 rounded-md ">
                <h1 class="ubuntu bg-slate-200 rounded-md px-2 py-1">{props.data.title}</h1>
                <div class="m-2 signika">
                    {props.data.classes.map(ele => {
                        const regex = new RegExp(props.search, 'gi');
                        if ( ele.match(regex)) {
                            // const cls  = ele.replace(regex, `<span class="bg-green-500">${this.ele}</span>`);
                            
                            let  cls = ele;
                            if(props.search!=='') 
                            cls=cls.replaceAll(props.search,`<span class="text-blue-500">${props.search}</span>`);
                            return <Para key={ele} cls={cls} setCopyClass={props.setCopyClass} setVisible={props.setVisible} />
                        }
                    })
                    }

                </div>
            </div>
        </div>

    </div>
)
)

export default Card