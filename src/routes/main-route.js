import React from 'react';
import { Switch, Route } from "react-router-dom";

//pages

const MainRoute = () => {
    return(
        <Switch>
            <Route exact path="/" component={} />
            <Route path="/add-food" component={} />
            <Route path="/add-promo" component={} />
            <Route path="/promo-list" component={} />
            <Route path="/checkout" component={} />
            <Route path="*" component={} />
        </Switch>
    );
}

export default MainRoute;