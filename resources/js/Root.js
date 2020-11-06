import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import Styleguide from './containers/Styleguide/Styleguide';
import LandingPage from './containers/LandingPage/LandingPage';

import Contact from './containers/Pages/Contact';
import Feedback from './containers/Pages/Feedback';
import Dataprotection from './containers/Pages/Dataprotection';
import Guidelines from './containers/Pages/Guidelines';
import Impressum from './containers/Pages/Impressum';

import Dashboard from './containers/Dashboard/Dashboard';


function Root() {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/styleguide" component={Styleguide} />

                {/* Footer Routes*/}
                <Route exact path="/kontakt" component={Contact} />
                <Route exact path="/feedback" component={Feedback} />
                <Route exact path="/datenschutz" component={Dataprotection} />
                <Route exact path="/richtlinien" component={Guidelines} />
                <Route exact path="/impressum" component={Impressum} />

                <Route path="/dashboard" component={Dashboard}>

                </Route>
            </Switch>
        </React.Fragment>
    );
}

export default Root;
