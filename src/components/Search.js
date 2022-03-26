import React, { useState } from 'react'
import "../styles/search.scss"

export default function Search({ grid, setGrid}) {

    const gridToggel = () => {
        setGrid(!grid)
    }
    return (

        <div className="icon">
            <div className="icon__sort">
                
                <span className='icon__sort'> 
                    <i class="far fa-sort-alpha-down"></i>      
                </span>


            </div>

            <div className='input'>
                <div class="input-group">


                    <input type="text" id="fname" required />
                    <label for="fname"> <span> <i class="far fa-search"></i></span>  </label>
                </div>
            </div>

            <div className="icon__grid">

                <span className='icon__grid'
                    onClick={gridToggel}
                > 
                {grid ?  <i class="fas fa-grip-horizontal"></i> : <i class="fas fa-bars"></i> }
               
                 
                </span>
                
            </div>


        </div>
    )
}
