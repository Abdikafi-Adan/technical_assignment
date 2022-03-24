import React from 'react'
import "../styles/ContactCard.scss"

export default function ContactCard({ person, setPerson}) {
 
  return (
    <div className="contact">

        {person.map((item) => (
            
             <div className="card">
                <div> </div>
            <h2 className="card--name">
            {item.name.first} {item.name.last} 
            </h2>
            {/* medium */}
        <div className="card--image--container" >
        <img src={item.picture.large} alt={item.name.first} className="card--image" />
        </div>
        <div className="card--info">
            <div className="card--location">
                 <p className="card--location"> {item.location.country} </p>
            </div>
            
            <div className="card--icon">
           
                <p className="card--icon--phone"><i class="fas fa-phone-alt"></i> </p>
                <p className="card--icon--envelope"><i class="far fa-envelope"></i></p>
            </div>
            
        </div>
        
        </div>
           
          ))}


    </div>
  )
}
  