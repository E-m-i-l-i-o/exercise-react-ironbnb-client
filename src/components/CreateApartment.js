import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./CreateApartment.css"

function CreateApartment() {

    const [apartmentTitle, setApartmentTitle] = useState("");
    const [img, setImg] = useState("");
    const [pricePerDay, setPricePerDay] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newApartment = {
            title: apartmentTitle,
            img: img,
            pricePerDay: pricePerDay
        };
        

        axios.post(`${process.env.REACT_APP_API_URL}/apartments`, newApartment)
            .then( response => {
                navigate("/apartments"); // apartment has been created, redirect the user
            })
            .catch(e => console.log("error creating apartment...", e));

    }

    return (
        <section className="CreateApartment">
            <h1>Create new Apartment</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input 
                        type="text" 
                        name="title" 
                        value={apartmentTitle} 
                        onChange={(e) => { setApartmentTitle(e.target.value) }} 
                        />
                </label>


                <label>
                    Image URL
                    <input
                        type="text"
                        name="img"
                        value={img}
                        onChange={(e) => setImg(e.target.value)}
                    />
                </label>

                <label>
                    Price per Day
                    <input
                        type="number"
                        min={0}
                        name="pricePerDay"
                        value={pricePerDay}
                        onChange={(e) => setPricePerDay(e.target.value)}
                    />
                </label>


                <button>Create</button>

            </form>
        </section>
    );
}

export default CreateApartment;