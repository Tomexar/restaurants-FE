import List from "./Components/restaurantList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import useFetch from "./Fetch";
import "./Home.css";

const Home = (props) => {
  const {
    data: restaurants,
    isLoading,
    error,
  } = useFetch("https://restaurants-hh.herokuapp.com/api");
  return (
    <div className="App">
      <div className="List">
        {error && <div className="error"> {error} </div>}
        {isLoading && (
          <div className="loading">
            <FontAwesomeIcon className="spinner" icon={faSpinner} size="lg" />
            LOADING
          </div>
        )}
        {restaurants && <List restaurants={restaurants} term={props.term} />}
      </div>
    </div>
  );
};

export default Home;
