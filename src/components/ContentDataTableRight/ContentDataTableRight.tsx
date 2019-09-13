import * as React from 'react';
import { Checkbox } from '../../components';
import { useState } from 'react';

const ContentDataTableRight = ({ data, deleteAllData, selectedCheckboxIndex, setSelectedCheckboxIndex }) => {
    const [isChecked, setIsChecked] = useState(false);

    const onChangeCheckbox = (e, id, items) => {

        const { checked } = e.target;

        if (checked) {
            selectedCheckboxIndex.push({id, items})  
        } else {
            const newIndex = selectedCheckboxIndex.findIndex(data => data.id === id);
            selectedCheckboxIndex.splice(newIndex, 1)  
        }
        
        setSelectedCheckboxIndex(selectedCheckboxIndex) 
    }

    return (
        <React.Fragment>
            {data !== undefined && data.map((data, index) => {
                const items= {
                    id: data.id,
                    artNo: data.artNo,
                    name: data.name,
                    description: data.description,
                    checked: data.checked
                }

                return (
                    <div className="main-block" key={index} >
                        <div className="block__content" >
                            <div className="content-article" >
                                Арт.: {data.artNo}
                            </div>
                            <div className="content-title" >
                                {data.name}
                            </div>
                            <div className="content-description" >
                                {data.description}
                            </div>
                        </div>
                        <Checkbox 
                            value={isChecked}
                            index={index} 
                            checked={data.checked} 
                            onChange={(e) => onChangeCheckbox(e, data.id, items)}
                            />
                    </div>
                )
            })}
        </React.Fragment>
    )
}

export default ContentDataTableRight;