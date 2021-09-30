import { Link } from "react-router-dom";
import "../Home.css";

const restaurantList = (props) => {
  return (
    <div className="rContainer">
      <div className="rTitle">
        {props.restaurants.filter((restaurant) =>{
          if(props.term === ""){
            return restaurant
          } else if(restaurant.name.toLowerCase().includes(props.term.toLowerCase())){
            return restaurant
          }
        }).map((restaurant, key) => (
          <div className = 'card' key = {key}>
          <Link to={`restaurants/${restaurant.id}`}>
            <div className="preview" key={restaurant.id}>
              <img src={restaurant.img} alt="idk" />
              <h2 className = 'pname'>{restaurant.name}</h2>
              <p className = 'plocation'>{restaurant.location}</p>
              <p className = 'ptime'>{restaurant.hh_start} - {restaurant.hh_end}</p>
            </div>
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default restaurantList;
