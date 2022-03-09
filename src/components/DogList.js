import React, { useEffect, useState} from "react";
import DogCard from "./DogCard";

function DogList(){
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/dogs")
        .then((r) => r.json())
        .then((data) => setDogs(data))
    }, [])

    console.log(dogs)
    
    return (
    <div>
        {dogs.map((dog) =>(
        <DogCard key={dog.id} dogs={dog}/>))}
    </div>
    )    
   }

export default DogList;