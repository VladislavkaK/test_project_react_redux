import * as React from 'react';
import { useState } from 'react';

const ContentDataTableLeft = ({ 
    data,
}) => {

    const [active, setActive] = useState(false);
    let classname = '';

    const onChangeColorRow = (index) => {
        if (index) {
            setActive(!active);
        }
    }

    if (active) {
        classname = 'active-row';
    }

    return (
        <React.Fragment>
            {data !== undefined && data.map((data, index) => {
                return (
                    <div className={`table-row ${classname}`} onClick={() => onChangeColorRow(index)} key={index} >
                        <div className="wrapper text-4">
                            <div className="wrapper text-2">
                                <div className="text-one">{data.artNo}</div>
                                <div className="text-two">{data.name}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </React.Fragment>
    )
}

export default ContentDataTableLeft;