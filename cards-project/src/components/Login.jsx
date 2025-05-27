export default function Login(props){
    let isRegistered = false
    const confirmPassword = !isRegistered && <input type="password" placeholder= "Confirm Password" />
    const buttonSubmit = !isRegistered ? <button onClick={props.onClick}>Register</button> : <button onClick={props.onClick}>Submit</button>

    return(
        <div>

            <input type="text" placeholder="Username" />
            <input type="password" placeholder= "Password" />
            {confirmPassword}
            {buttonSubmit}

            
        </div>
    )
}