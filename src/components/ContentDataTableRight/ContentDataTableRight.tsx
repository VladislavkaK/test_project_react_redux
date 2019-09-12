import * as React from 'react';
import { Checkbox } from '../../components';

const ContentDataTableRight = ({ data, arrData, deleteAllData }) => {

    return (
        <React.Fragment>
            {data !== undefined && data.map((data, index) => {
                // if (data.checked) {
                //     arrData.push({id: data.id})
                // }
                const onChangeCheckbox = () => {
                    deleteAllData(data.id)
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
                        <Checkbox index={index} checked={data.checked} onClick={onChangeCheckbox} />
                    </div>
                )
            })}
        </React.Fragment>
    )
}

export default ContentDataTableRight;