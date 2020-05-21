import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => {
    return (
        <header className="header">
            <div className="content-container">
                <div className="header__content">
                    <Link className="header__title" to="/dashboard" >
                        <h1>Expensify</h1>
                    </Link>
                    <NavLink to="/help" activeClassName="is-active" exact>Help Page</NavLink>
                    <button className="button button--link" onClick={startLogout}>Log Out</button>
                </div>
            </div>
        </header>
    );
};

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect (undefined, mapDispatchToProps)(Header);