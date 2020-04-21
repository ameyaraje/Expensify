import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            This page does not exist. Please check the route you're on.
            Click <Link to="/">here</Link> to go back
        </div>
    );
};

export default NotFoundPage;