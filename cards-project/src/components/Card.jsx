import Info from "./Info"
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
        </div>

    

    )
}
export default Card