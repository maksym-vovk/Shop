import React from 'react';

import './index.scss';


export const FailureOrder = ({removeErrorMessage}) => {
    const checkBackground = (event) => {
        const target = event.target;
        console.log(target);
        if (target.classList.contains('background') || target.classList.contains('failure-modal__cancel-image')) {
            removeErrorMessage(false)
        }
    };

    return (
        <div onClick={checkBackground} className="background">
            <div className="failure-modal">
                <div className="failure-modal__cancel">
                    <img className="failure-modal__cancel-image" src="../static/img/cancel.png" alt="cancel"/>
                </div>
                <div className="failure-modal__failure-image">
                    <img className="failure-modal__img" src="../static/img/sad-emoticon.png" alt="sad"/>
                </div>
                <p className="failure-modal__text">Oops! Something went wrong...</p>
            </div>
        </div>
    )
};