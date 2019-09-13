import * as React from 'react';

const Checkbox = ({ value, index, checked, onChange }) => {

    return (
        <div className="block__checkbox" >
            <div className="form-group">
                <input type="checkbox" id={`html${index}`} value={value} defaultChecked={checked} onChange={onChange} />
                <label htmlFor={`html${index}`}></label>
            </div>
        </div>
    )
}

export default Checkbox;