import * as React from 'react';
import { ContentDataTableRight, Button } from '../../components';
import { useFuncTableRight } from '../../utills/useFuncTableRight';

import './styles/styles.scss';

const TableRightContainer = ({ data, selectAllData, selectNothingData, deleteAllData, addRowLeftTable, selectAll, selectedData }) => {
    const useFunc = useFuncTableRight(deleteAllData, addRowLeftTable, data, selectAllData, selectAll, selectedData, selectNothingData);

    return (
        <div className="container-table-right" >
            <div className="main-wrapper-right" id="style-4" >
                <div className="force-overflow"></div>
                <ContentDataTableRight
                    data={data}
                    deleteAllData={deleteAllData}
                    selectedCheckboxIndex={useFunc.selectedCheckboxIndex}
                    setSelectedCheckboxIndex={useFunc.setSelectedCheckboxIndex} />
            </div>

            <div className="footer" >
                <Button name="Все" content="exist" onClick={useFunc.onHandleSelectAll} />
                <Button name="Ни одного" content="exist" onClick={useFunc.onHandleSNothingData} />
                <Button name="Удалить выбр." content="exist" onClick={useFunc.onHandleDeleteCheckbox} />
            </div>
        </div>
    )
}

export default TableRightContainer;
