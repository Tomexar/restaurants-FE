import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import useFetch from "../Fetch";
import Menu from "./Menu";

const RestaurantPage = () => {
  const { id } = useParams();
  const {
    data: restaurant,
    error,
    isLoading,
  } = useFetch("https://restaurants-hh.herokuapp.com/api/" + id + "/menu");

  return (
    <div className="restaurant=page">
      {error && <div>{error}</div>}
      {isLoading && (
        <div className="loading">
          <FontAwesomeIcon className="spinner" icon={faSpinner} size="lg" />
          LOADING
        </div>
      )}
      <div className="header_img">
        {restaurant && (
          <img src={`/${restaurant.img}`} alt={`${restaurant.img}`} />
        )}
      </div>

      <div className="black_arrow">
        <Link to="/">
          <FontAwesomeIcon className="arrow" icon={faArrowLeft} size="lg" />
        </Link>
      </div>

      {restaurant && (
        <article className="copy">
          <h1 className="page_name">{restaurant.name}</h1>
          <p className="page_hours">
            Hours: {restaurant.hh_start} - {restaurant.hh_end}
          </p>
          <p className="page_location">{restaurant.location}</p>

          {/* <h2 className = 'MENU'>MENU:</h2> */}
          {restaurant && <Menu menu={restaurant.menu} />}
        </article>
      )}
      {restaurant && (
        <div className="contact">
          <a href={'tel:'+restaurant.phone}>
            <FontAwesomeIcon className="phone" icon={faPhone} size="lg" />
          </a>
          <a href = {restaurant.instagram}target="_blank">
          <FontAwesomeIcon className="instagram" icon={faInstagram} size="lg" />
          </a>
          <a href = {restaurant.website}target="_blank">
          <FontAwesomeIcon className="website" icon={faGlobe} size="lg" />
          </a>
        </div>
      )}
    </div>
  );
};

export default RestaurantPage;
