import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>Portfolio</h1>
            <NavLink to="/" activeClassName="is-active" exact>Home</NavLink>
            <NavLink to="/portfolio" activeClassName="is-active" exact>Portfolio</NavLink>
            <NavLink to="/contact" activeClassName="is-active" exact>Contact</NavLink>
        </div>
    );
};

const HomePage = () => {
    return (
        <div>
            <h3>Welcome</h3>
            <p>This is my site, take a look around!</p>
        </div>
    );
};

const PortfolioPage = () => {
    return (
        <div>
            <h3>My Portfolio</h3>
            <p>Check out the following items I've done:</p>
            <Link to="/portfolio/1">Project 1</Link>
            <Link to="/portfolio/2">Project 2</Link>
        </div>
    );
};

const ProjectPage = (props) => {
    console.log(props);
    return (
        <div>
            <h3>Project Number {props.match.params.id}</h3>
            <p>Here are the details about project number {props.match.params.id}</p>
        </div>
    );
};

const ContactPage = () => {
    return (
        <div>
        <h3>Contact Me</h3>
            <p>You can reach me at test@test.com</p>
        </div>
    );
};

const Routes = () => {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={HomePage} exact />
                    <Route path="/portfolio" component={PortfolioPage} exact />
                    <Route path="/contact" component={ContactPage} exact />
                    <Route path="/portfolio/:id" component={ProjectPage} exact/>
                </Switch>
            </div>
        </Router>
    );
};

ReactDom.render(<Routes />, document.getElementById('app'));