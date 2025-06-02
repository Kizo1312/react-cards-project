import { useState } from "react"
import axios from 'axios';

function Users () {
    const[users, setUsers] = useState([])
    const[jedan, setJedan] = useState("neki")
    const [potreban, setPotreban] = useState({})
    const[firstUser, setFirstUser] = useState()

    const getData = async () => {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts?userId=1`
	);
    const data = response.json()
    setFirstUser(data)
    
    
};

getData()
console.log(firstUser)


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