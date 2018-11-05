import React, {Component} from 'react';
import styles from './../CTMX.module.css';
import CTMXBrand from './../assets/images/brand/brand--black.png';

class CTMXLoader extends Component {
    render() {
        return(
            <section id="ctmx-loader" className={styles.loader}>
                <img className={styles.loader__brand} src={CTMXBrand} alt="Circuito MX" />
            </section>
        )
    }
}

export default CTMXLoader;