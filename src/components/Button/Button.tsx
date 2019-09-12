import * as React from 'react';

interface IProps {
  name: any;
  content: any;
  onClick?: any;
  disabled?: any;
}

const Button: React.FC<IProps> = ({ name, content, onClick, disabled }) => {

    let classname = ''

    if (content === 'exist') {
        classname = 'select-all';
    } else if (content === 'arrow_down') {
        classname = 'arrow-down';
    } else if (content === 'arrow_up') {
        classname = 'arrow-up';
    }

    return (
        <div className="footer-arrow-button__down" onClick={onClick} >
            <button type="button" className={`arrow-button ${disabled}`}>
                <span className={classname}>{name}</span>
            </button>
        </div>
    )
}

export default Button;
