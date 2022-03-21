import React from 'react'

export default function Header() {
  return (
        <header className='header_container'>

            <h1 className='header__titel'>
                Meet The Team
            </h1>

            <div className="icon__container">
               <span className='icon__sort'><i class="lni lni-sort-amount-asc"></i> </span>
                
                <div className='input_container'> 
                    <span className='icon__search'> <i class="lni lni-search-alt"></i> </span> 
                    <input type="text" /> 
                    
                 </div>
                    
               
                <span className='icon__grid'> <i class="lni lni-grid-alt"></i></span>
                
            </div>

        </header>
    
  )
}
