import React from "react";
// import {GlobalContext} from "../context/context";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Nav from "../components/navbar";
import SignUp from "../screens/signup";

export default function App() {

    return (
        <Router>
            <Nav />
            <Switch>
                <Route path='/signup'>
                    <SignUp/>
                </Route>
                <Route path='/signin'>

                </Route>
                <Route path='/home'>

                </Route>
                <Route path='/mytweets'>

                </Route>
            </Switch>
        </Router>
    )
}