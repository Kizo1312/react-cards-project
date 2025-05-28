import { useState } from "react";
function AdressForm(){
    const[adress, setAdress] = useState({
        city: "",
        street: ""

    })
    function handleChange(event){
        console.log(event.target)
        const {name, value} = event.target
        setAdress((previous) => {
            return {
                ...previous,
                [name]:value

            }
        })
    }
    return(
        <div>

            <p>street:{adress.street}, city: {adress.city}</p>


            <input type="text" name="street" value={adress.street}  onChange={handleChange} />
            <input type="text" name="city" value={adress.city} onChange={handleChange} />
        </div>
    )

}
export default AdressForm