import * as React from 'react';
import { useState, useEffect } from 'react';

const ContentDataTableLeft = ({
    data,
    counter,
    selectedDivDefault,
    setSelectedDivDefault
}) => {

    const [selectedItem, setSelectedItem] = useState();

    const onChangeColorRow = (index) => {
      setSelectedDivDefault(false);
      setSelectedItem(index)
    }

    useEffect(() => {
      setSelectedDivDefault(true)
    }, [])

    return (
        <React.Fragment>
            {data !== undefined && data.map((data, index) => {

                if (selectedDivDefault && index === 0) {
                  return (
                    <div className={`table-row active-row`} onClick={() => onChangeColorRow(index)} key={index} >
                        <div className="wrapper text-4">
                            <div className="wrapper text-2">
                                <div className="text-one">{data.artNo}</div>
                                <div className="text-two">{data.name}</div>
                            </div>
                        </div>
                    </div>
                  )
                }

                return (
                    <div className={`table-row ${(selectedItem === index || counter === index) ? 'active-row' : ''}`} onClick={() => onChangeColorRow(index)} key={index} >
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
