import Info from "./Info"
import Button from "./Button"
function Card (props){
    return (
        <div>


            <h2>{props.name}</h2>
        <img
          src={props.image}
          alt="avatar_img"
        />
        <Info content = {props.phone}   />
        <Info content = {props.email}   />
        <Button onClick={props.onClick}>DeleteCard</Button>
        </div>

    

    )
}
export default Card