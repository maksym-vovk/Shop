import React from "react";
import { Link } from 'react-router-dom';

import './index.scss';

export const Logo = () => {
    return (
            <Link className="logo" to="/">
                <img
                    className="logo-image"
                    src= "static/img/apple.png"
                    alt="logo"
                    title="logo"
                />
            </Link>
    );
};

