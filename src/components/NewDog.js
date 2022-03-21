import React, { useEffect, useState} from "react";
import { Redirect } from "react-router-dom";
import DogForm from "./DogForm";

function NewDog({dogs, setDogs}) {

 const [page, setPage] = useState();

 function handlePageChange(){
     setPage(<><h1 className="subform">New Dog Added</h1> </>)
 }

 useEffect(() => {
     setPage(<DogForm dogs={dogs} setDogs={setDogs} change={handlePageChange}/>)
 }, [])
    
    return (
        <div>
            {page}
        </div>
    )


}

export default NewDog;