import * as React from 'react';

const Checkbox = ({ index }) => {
    return (
        <div className="block__checkbox" >
            <div className="form-group">
                <input type="checkbox" id={`html${index}`} />
                <label htmlFor={`html${index}`}></label>
            </div>
        </div>
    )
}

export default Checkbox;