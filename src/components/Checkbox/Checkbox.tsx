import * as React from 'react';

const Checkbox = ({ index, checked, onClick }) => {

    return (
        <div className="block__checkbox" >
            <div className="form-group">
                <input type="checkbox" id={`html${index}`} defaultChecked={checked} onClick={onClick} />
                <label htmlFor={`html${index}`}></label>
            </div>
        </div>
    )
}

export default Checkbox;