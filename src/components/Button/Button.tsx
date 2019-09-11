import * as React from 'react';

const Button = ({ name, content }) => {

    let classname = ''

    if (content === 'exist') {
        classname = 'select-all';
    } else if (content === 'arrow_down') {
        classname = 'arrow-down';
    } else if (content === 'arrow_up') {
        classname = 'arrow-up';
    } 

    return (
        <div className="footer-arrow-button__down" >
            <button type="button" className="arrow-button">
                <span className={classname}>{name}</span>
            </button>
        </div> 
    )
}

export default Button;