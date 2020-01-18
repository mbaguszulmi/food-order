import React from 'react';
import { Switch, Route } from "react-router-dom";

//pages
import Checkout from '../pages/checkout';
import NotFoundPage from '../pages/not-found-page';
import FoodList from '../pages/food-list';
import AddFood from '../pages/add-food';
import AddPromo from '../pages/add-promo';
import PromoList from '../pages/promo-list';

const MainRoute = () => {
    return(
        <Switch>
            <Route exact path="/" component={FoodList} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/add-food" component={AddFood} />
            <Route path="/add-promo" component={AddPromo} />
            <Route path="/promo-list" component={PromoList} />
            <Route path="*" component={NotFoundPage} />
        </Switch>
    );
}

export default MainRoute;