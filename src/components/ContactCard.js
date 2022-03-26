import React from 'react'
import "../styles/ContactCard.scss"

export default function Contactcard({ person, setPerson, grid, setgri}) {
 
  return (
    <div className="contact">

      { grid ?  
          person.map((item) => (
                      
                      <div className="card__grid">
                      
                    <h2 className="card__grid--name">
                    {item.name.first} {item.name.last} 
                    </h2>
                    {/* medium */}
                <div className="card__grid--image--container" >
                <img src={item.picture.large} alt={item.name.first} className="card__grid--image" />
                </div>
                <div className="card__grid--info">
                    <div className="card__grid--location">
                          <p className="card__grid--location"> {item.location.country} </p>
                    </div>
                    
                    <div className="card__grid--icon">
                    
                        <p className="card__grid--icon--phone"><i class="fas fa-phone-alt"></i> </p>
                        <p className="card__grid--icon--envelope"><i class="far fa-envelope"></i></p>
                    </div>
                    
                </div>
                
                </div>
                    
                  )) :    
          person.map((item) => (
                      
                <div className="card__list">
                  <div className="card__list--containerImage" >
              <img src={item.picture.medium} alt={item.name.first} className="card__list--containerImage--image" />
              </div> 
              <div className="card__list--name">
                <h2>
                  {item.name.first} {item.name.last}  
                  </h2>
                  <div className="card__list--location">
                        <p className="card__list--location"> {item.location.country} </p>
                  </div>
                
              </div>   
                  
                  {/* medium */}
              <div className="card__list--info">
                  <div className="card__list--icon">
                      <p className="card__list--icon--phone"><i class="fas fa-phone-alt"></i> </p>
                      <p className="card__list--icon--envelope"><i class="far fa-envelope"></i></p>
                  </div>
                  
              </div>
              
              </div>
                  
                )) 
              
      }

    
{/* hej */}


    </div>
  )
}
  