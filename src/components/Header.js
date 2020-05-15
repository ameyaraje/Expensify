import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => {
    return (
        <header>
            <h1>Expensify App</h1>
            <NavLink to="/dashboard" activeClassName="is-active" >Home</NavLink>
            <NavLink to="/add" activeClassName="is-active" exact>Add Expense</NavLink>
            <NavLink to="/help" activeClassName="is-active" exact>Help Page</NavLink>
            <button onClick={startLogout}>Log Out</button>
        </header>
    );
};

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect (undefined, mapDispatchToProps)(Header);