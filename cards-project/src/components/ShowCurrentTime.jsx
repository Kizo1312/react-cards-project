import { useState } from "react";
function ShowCurrentTime() {
    
    const[time, setTime] = useState()
    function myTIme()  {
        let time = new Date(Date.now())
        let vrijeme = time.toLocaleTimeString()
        setTime(vrijeme)
    }
     setInterval(myTIme, 1000)

     
    
   
    return (
        <div>
            <h1>{time}</h1>
            <button onClick={myTIme} >Get Time</button>
        </div>
    )

}
export default ShowCurrentTime