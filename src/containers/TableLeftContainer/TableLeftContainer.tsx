import * as React from 'react';
import { Button, ContentDataTableLeft } from '../../components';
import { useState } from 'react';
import { useContent } from '../../utills/useContent';

import './styles/style.scss';

const TableLeftContainer = ({ data, deleteRow, addRow }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const disabledButtonUp = selectedIndex === 0 ? 'button-up-disabled' : '';
    const disabledButtonDown = selectedIndex === data.length - 1 ? 'button-down-disabled' : '';
    const useFunc = useContent(deleteRow, addRow, data);

    const onHandleChangeIndexUp = () => {
        if (selectedIndex > 0) {
            useFunc.setActiveAdd(false)
            setSelectedIndex(selectedIndex => selectedIndex - 1)
        }
    }

    const onHandleChangeIndexDown = () => {
        if (selectedIndex < data.length - 1) {
            useFunc.setActiveAdd(false)
            setSelectedIndex(selectedIndex => selectedIndex + 1)
        }
    }

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
                    <ContentDataTableLeft
                        data={data}
                        setActiveAdd={useFunc.setActiveAdd}
                        setSelectedIndex={setSelectedIndex}
                        counter={selectedIndex} />
                </div>
            </div>
            <div className="footer" >
                <Button name="" content={`arrow_down`} disabled={disabledButtonUp} onClick={onHandleChangeIndexDown} />
                <Button name="" content={`arrow_up`} disabled={disabledButtonDown} onClick={onHandleChangeIndexUp} />
                <Button name="Добавить" content="exist" onClick={() => useFunc.onHandleClickChangeData(selectedIndex)} />
            </div>
        </div>
    )
}

export default TableLeftContainer;
