import React, { useState } from "react";
import Home from "./Home";
import NavBar from "./Components/navBar";
import Time from "./Components/Time"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./Components/Cart";
import RestaurantPage from "./Components/restPage"

const App = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const searchHandler = (searchTerm) => {
        setSearchTerm(searchTerm)
    }
    return ( 
        <Router>
        <Time/>
        <Switch>
          <Route exact path="/">
            <Home term = {searchTerm}/>
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/restaurants/:id">
            <RestaurantPage/>
          </Route>
        </Switch>
        <NavBar term = {searchTerm} keyword = {searchHandler}/>
      </Router>
     );
}
 
export default App;