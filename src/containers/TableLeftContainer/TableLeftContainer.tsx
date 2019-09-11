import * as React from 'react';
import { Button, ContentDataTableLeft } from '../../components';

import './styles/style.scss';

const TableLeftContainer = ({ data }) => {
    return (
        <div className="container-table-left" >
            <div className="main-wrapper">
                <div className="table-row header"  >
                    <div className="wrapper text-4">
                        <div className="wrapper text-2">
                            <div className="text-one">Артикул</div>
                            <div className="text-two">Наименование</div>
                        </div>
                    </div>
                </div>
                    <div className="content-container" id="style-3" >
                        <div className="force-overflow"></div>
                        <ContentDataTableLeft data={data} />
                    </div>
                </div>
            <div className="footer" >
                <Button name="" content="arrow_down" />
                <Button name="" content="arrow_up" />
                <Button name="Добавить" content="exist" />
            </div>
        </div>
    )
}

export default TableLeftContainer;