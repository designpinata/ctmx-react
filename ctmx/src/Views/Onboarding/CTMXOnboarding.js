import React, {Component} from 'react';
import styles from './../../CTMX.module.css';
import CTMXLoader from './../../Components/CTMXLoader';

class CTMXOnboarding extends Component {
    // Adding loader for screen
    componentDidMount() {
        const LOADING_SCREEN = document.querySelector('#ctmx-loader');
        if (LOADING_SCREEN) {
            // fade out
            LOADING_SCREEN.classList.add(styles.is_active);
            setTimeout(() => {
                // remove class
                LOADING_SCREEN.classList.remove(styles.is_active);
            }, 1000)
        }
    }
    
    render() {
        return(
            <section>
                <CTMXLoader/>
                Onboarding
            </section>
        )
    }
}

export default CTMXOnboarding;