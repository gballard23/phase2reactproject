import React, { useState} from "react";

function DogForm({dogs, setDogs, change}){
    const [formData, setFormData] = useState({
        name:"",
        image:"",
        weight:"",
        height:"",
        color:"",
        longevity:"",
        energy:"Moderate energy",
        grooming:"Moderate",      
        description:""
        
    })

    function handleChange(event){
        setFormData({
            ...formData, 
            [event.target.name]: event.target.value,
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        fetch("http://localhost:3000/dogs", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(
                {
                    name:formData.name,
                    image:formData.image,
                    attributes: {
                        weight: formData.weight,
                        height: formData.height,
                        color: formData.color,
                        longevity: formData.longevity,
                        energy: formData.energy,
                        grooming: formData.grooming,
                    },
                    description:formData.description,
                })
        })
        .then((r) => r.json())
        .then((dog) => setDogs([...dogs, dog]))
        change()
    }

    return (
    <section>
        <h1>New Dog</h1>
        <form onSubmit={handleSubmit}>
          <div className="form">
            <label>
                Breed:
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                />
            </label>
          </div>  
          <div className="form">
            <label>
                Image:
                <input 
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                />
            </label>
          </div>
          <div className="form">  
            <label>
                Attributes:
                <div className="form">
                    <label>
                        Weight:
                        <input
                        type="text"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="form">  
                    <label>
                        Height:
                        <input
                        type="text"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                        />
                    </label>
                </div> 
                <div className="form"> 
                    <label>
                        Color:
                        <input
                        type="text"
                        name="color"
                        value={formData.color}
                        onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="form">  
                    <label>
                        Lifespan:
                        <input
                        type="text"
                        name="longevity"
                        value={formData.longevity}
                        onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="form">  
                    <label>
                        Energy:
                        <select name="energy" value={formData.energy} onChange={handleChange}>
                        <option value="Calm">Calm</option>
                        <option value="Moderate energy">Moderate energy</option>
                        <option value="Very energetic">Very energetic</option>
                        </select>
                    </label>
                </div>
                <div className="form">  
                    <label>
                        Grooming:
                        <select name="grooming" value={formData.grooming} onChange={handleChange}>
                            <option value="Low">Low</option>
                            <option value="Moderate">Moderate</option>
                            <option value="High">High</option>
                        </select>
                    </label>
                    </div>
                    <div id="description"> 
                    <label>
                        Description:
                        <input 
                         id="textbox"
                         type="text" 
                         name="description" 
                         value={formData.description}
                         onChange={handleChange}
                         />
                    </label>
                </div>  
            </label>
            </div >  
            <button  type="submit">Add Dog</button>
        </form>
    </section>
        
     
    )   
   }

export default DogForm