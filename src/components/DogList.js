import DogCard from "./DogCard";

function DogList({dogs}){
    
   
    
 return (
    <div className="list">
        {dogs.map((dog) =>(
        <DogCard key={dog.id} dogs={dog}/>))}
    </div>
    )    
   }

export default DogList;