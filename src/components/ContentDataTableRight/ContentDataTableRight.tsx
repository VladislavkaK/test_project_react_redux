import * as React from 'react';
import { Checkbox } from '../../components';

const ContentDataTableRight = ({ data }) => {
    return (
        <React.Fragment>
            {data !== undefined && data.map((data, index) => {
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
                        <Checkbox index={index} />
                    </div>
                )
            })}
        </React.Fragment>
    )
}

export default ContentDataTableRight;