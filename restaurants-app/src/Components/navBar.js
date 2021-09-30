import React, { useRef } from "react";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const NavBar = (props) => {
  const inputEl = useRef("");
  const getSearchTerm = () => {
    props.keyword(inputEl.current.value);
  };
  return (
    <div className="containerBottom">
      <div className="icons">
        <div className="home">
          <Link to="/">
            <FontAwesomeIcon icon={faHome} size="lg" />
          </Link>
        </div>
        <div className="search">
          <input
            ref={inputEl}
            type="text"
            className="search__input"
            placeholder="Search..."
            value={props.term}
            onChange={getSearchTerm}
          />
          <button className="search__btn">
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(NavBar);
