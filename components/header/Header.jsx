import PropTypes from 'prop-types';

import styles from './Header.scss';


function Header () {
    return (
        <header className={styles('header')}>
            <div className={styles('container')}>
                <div className={styles('name-container')}>
                    <h1>Julia Endow</h1>
                </div>
                <div className={styles('title-container')}>
                    <h2>Art Direction + Design</h2>
                </div>
            </div>
        </header>
    );
}

Header.propTypes = {
}

export default Header;
