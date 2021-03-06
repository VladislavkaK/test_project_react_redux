import * as React from 'react';
import { useState, useEffect } from 'react';
import { useContent } from '../../utills/useContent';

const ContentDataTableLeft = ({
    data,
    counter,
    setActiveAdd,
    setSelectedIndex,
}) => {

    const [selectedItem, setSelectedItem] = useState();

    const onChangeColorRow = (index) => {
        setActiveAdd(false)
        setSelectedIndex(index)
    }

    useEffect(() => {
        setSelectedItem(counter)
    }, [])

    return (
        <React.Fragment>
            {data !== undefined && data.map((data, index) => {

                return (
                    <div className={`table-row ${(counter === index) ? 'active-row' : ''}`} onClick={() => onChangeColorRow(index)} key={index} >
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
