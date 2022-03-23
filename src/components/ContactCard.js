import React from 'react'
import "../styles/ContactCard.scss"

export default function ContactCard() {
  return (
    <div className="contact">
    <div className="card">
       
            <h2 className="card--name">
                John 
            </h2>
         
        <img src="" className="card--image" />
        <div className="card--info">
        <p className="card--location"> Stockholm </p>
            <div className="card--icon">
                <p className="card--icon--phone"><i class="fas fa-phone-alt"></i> </p>
                <p className="card--icon--envelope"><i class="far fa-envelope"></i></p>
            </div>
            
        </div>
        
    </div>
  

    {/* second row */}
  

    


</div>
  )
}
