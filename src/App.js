import React from "react";

import Soda from "./Soda";
import Sardines from "./Sardines";
import Chips from "./Chips";
import VendingMachine from "./VendingMachine";
import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <VendingMachine />
                        <div>
                            <Link to="chips">Chips</Link>
                            <Link to="sardines">Sardines</Link>
                            <Link to="soda">Soda</Link>
                        </div>
                    </Route>
                    <Route exact path="/soda">
                        <Soda />
                        <Link to="/">Go back</Link>
                    </Route>
                    <Route exact path="/sardines">
                        <Sardines />
                        <Link to="/">Go back</Link>
                    </Route>
                    <Route exact path="/chips">
                        <Chips />
                        <Link to="/">Go back</Link>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
