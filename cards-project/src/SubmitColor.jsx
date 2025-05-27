import { useState } from "react"
function SubmitColor(){
    const[isColored, setIsColored] = useState(false)
    const[mouse, setMouse] = useState(false)
    
    function getColor(){
      setIsColored(!isColored)
    } 
    function getMouse () {
        setMouse(!mouse)
    }
    const submited = isColored && <h1>Submited</h1> 

    return (
        <div>
            {submited}
            <input type="Enter your name" />
            <button style={mouse?{backgroundColor:"black", color:"white"}:{} } onClick={getColor} onMouseOver={getMouse} onMouseOut={getMouse}>Submit</button>
        </div>
    )
}
export default SubmitColor