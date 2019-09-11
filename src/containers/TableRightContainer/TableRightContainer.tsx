import * as React from 'react';
import { ContentDataTableRight, Button } from '../../components';

import './styles/styles.scss';

const TableRightContainer = ({ data }) => {

    return (
        <div className="container-table-right" >
            <div className="main-wrapper-right" id="style-4" >
                <div className="force-overflow"></div>
                <ContentDataTableRight data={data} />
            </div>

            <div className="footer" >
                <Button name="Выбрать все" content="exist" />
                <Button name="Выбрать ничего" content="exist" />
                <Button name="Удалить выделен." content="exist" />
            </div>
        </div>
    )
}

export default TableRightContainer;