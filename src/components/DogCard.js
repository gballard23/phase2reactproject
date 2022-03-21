import React from "react";

function DogCard({dogs}){      

 return (
    <div className='dog'>
        <h1 className="underlined"><strong>{dogs.name}</strong></h1>
        <div>
            <img src={dogs.image} alt={dogs.name}/>
        </div>
        <div className="attributes">
            <h3><strong>Attributes</strong></h3>
           <ul className="attList">
               <li key={dogs.attributes.weight}>weight: {dogs.attributes.weight} lbs</li>
               <li key={dogs.attributes.height}>height: {dogs.attributes.height} in.</li>
               <li key={dogs.attributes.color}>color: {dogs.attributes.color}</li>
               <li key={dogs.attributes.longevity}>lifespan: {dogs.attributes.longevity} yrs</li>
               <li key={dogs.attributes.energy}>energy level: {dogs.attributes.energy}</li>
               <li key={dogs.attributes.grooming}>grooming level: {dogs.attributes.grooming}</li>
            </ul>     
        </div>
        <div className="description">
            <h3>Description</h3>
            <p>{dogs.description}</p>
        </div>


    </div>
    )    
}

export default DogCard