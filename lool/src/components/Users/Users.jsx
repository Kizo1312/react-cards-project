import { useState } from "react"
function Users () {
    const[users, setUsers] = useState([])
    const[jedan, setJedan] = useState("neki")
    const [potreban, setPotreban] = useState({})
    async function getUsers() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await response.json()
            
            
            setUsers(data)
        } catch (error) {
            console.log(error)
        }
        
    }
    getUsers()
    
    
    
    function getOneUser(event){
        setJedan(event.target.value)
        console.log(jedan)
    }
    
        
    function findUser(korisnik) {
    const foundUser = users.find(user => user.username === korisnik);
    console.log(foundUser);
    setPotreban(foundUser);
}

        

    return(
        <div>
<input type="text" onChange={getOneUser} value={jedan} />
<p>{jedan}</p>

<button onClick={()=>findUser(jedan)} >find</button>
{potreban ? <p>{potreban.name},{potreban.email}</p> : <p>nema</p> }


        </div>
    )
}
export default Users