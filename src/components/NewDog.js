import React, { useEffect, useState} from "react";
import DogForm from "./DogForm";

function NewDog({dogs, setDogs}) {

 const [page, setPage] = useState();

 function handlePageChange(){
     setPage(<><h1 className="subform">New Dog Added</h1> </>)
 }

 useEffect(() => {
    setTimeout(() => {
        setPage(<DogForm dogs={dogs} setDogs={setDogs} change={handlePageChange}/>)
    }, 3000);
    
 }, [dogs, setDogs])
    
    return (
        <div>
            {page}
        </div>
    )


}

export default NewDog;