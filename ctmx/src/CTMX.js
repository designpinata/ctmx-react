import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import CTMXOnboarding from './Views/Onboarding/CTMXOnboarding';

class CTMX extends Component {
    render () {
        return(
            <main>
                <Switch>
                    <Route exact path='/' component={CTMXOnboarding}/>
                </Switch>
            </main>
        )
    }
}

export default CTMX;

// ToDo 