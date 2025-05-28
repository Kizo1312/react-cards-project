import { useState } from "react"
export default function Login(props){
    const[fullForm, setFullForm]= useState ({
        username: "",
        password: ""
    })
    function handleChange(event){
        const{name, value} = event.target
        setFullForm((prev) =>{
            return {

                ...prev,
                [name]: value
            }
        })

    }
    let isRegistered = true
    const confirmPassword = !isRegistered && <input type="password" placeholder= "Confirm Password" />
    const buttonSubmit = !isRegistered ? <button onClick={props.onClick}>Register</button> : <button onClick={props.onClick}>Submit</button>

    return(
        <div>
            <p>{fullForm.username}, {fullForm.password}</p>

            <input type="text" placeholder="Username" name="username" value={fullForm.username} onChange={handleChange} />
            <input type="password" placeholder= "Password" name="password" value={fullForm.password} onChange={handleChange} />
            {confirmPassword}
            {buttonSubmit}

            
        </div>
    )
}