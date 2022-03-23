import React from 'react'
import "../styles/search.scss"

export default function Search() {
  return (

    <div className="icon">
        <div className="icon__sort">
            <span className='icon__sort'><i class="lni lni-sort-amount-asc"></i> </span>
        
        </div>
        
        <div className='input'> 
        <div class="input-group"> 
        

        <input type="text" id="fname" required />
       <label for="fname"><i class="lni lni-search-alt"></i> </label>
                        </div>            
        </div>

        <div className="icon__grid">

            <span className='icon__grid'> <i class="lni lni-grid-alt"></i></span>
        </div>
        
        
    </div>
  )
}
