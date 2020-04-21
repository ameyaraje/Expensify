import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Expensify App</h1>
            <NavLink to="/" activeClassName="is-active" exact>Home</NavLink>
            <NavLink to="/add" activeClassName="is-active" exact>Add Expense</NavLink>
            <NavLink to="/help" activeClassName="is-active" exact>Help Page</NavLink>
        </header>
    );
};

export default Header;