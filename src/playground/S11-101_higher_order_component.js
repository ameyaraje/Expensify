import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    return (
        <div>
            <h1>Info</h1>
            <p>Here is the the info: {props.info}</p>
        </div>
    );
};


/*
    Over here, when the WrappedComponent is added, that's the HOC. 
*/
const withAdminWarning = (WrappedComponent) => {
    return (props) => {
        return (
            <div>
                { props.isAdmin && <p>This is confidential info. Do not share</p> }
                <WrappedComponent {...props}/> 
            </div>
        );
    };
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => {
        return (
            <div>
                { props.isAuthenticated ? <WrappedComponent {...props} /> : <h3>You're not logged in. Please log in to continue</h3> }
            </div>
        );
    };
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="some nonsense" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="some nonsense" />, document.getElementById('app'));