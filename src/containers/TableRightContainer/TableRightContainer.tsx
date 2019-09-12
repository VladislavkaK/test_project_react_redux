import * as React from 'react';
import { ContentDataTableRight, Button } from '../../components';

import './styles/styles.scss';

const TableRightContainer = ({ data, selectAllData, selectNothingData, deleteAllData }) => {
    let arrData = [];

    return (
        <div className="container-table-right" >
            <div className="main-wrapper-right" id="style-4" >
                <div className="force-overflow"></div>
                <ContentDataTableRight data={data} arrData={arrData} deleteAllData={deleteAllData} />
            </div>

            <div className="footer" >
                <Button name="Выбрать все" content="exist" onClick={selectAllData} />
                <Button name="Выбрать ничего" content="exist" onClick={selectNothingData} />
                <Button name="Удалить выделен." content="exist" onClick={() => deleteAllData(arrData)} />
            </div>
        </div>
    )
}

export default TableRightContainer;