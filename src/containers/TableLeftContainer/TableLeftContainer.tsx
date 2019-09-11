import * as React from 'react';
import { Button, ContentDataTableLeft } from '../../components';
import { useState } from 'react';

import './styles/style.scss';

const TableLeftContainer = ({ data }) => {
  const [counter, setCounter] = useState(0);
  const [selectedDivDefault, setSelectedDivDefault] = useState(false);
  const [activeDisabledButton, setActiveDisabledButton] = useState(false);
  let disabledButton = '';

  // if (counter === 0 || counter === data.length - 1) {
  //   setActiveDisabledButton(true);
  // }

  // if (activeDisabledButton) {
  //   disabledButton = 'button-disabled';
  // } else {
  //   disabledButton = '';
  // }

  const onHandleChangeIndexUp = () => {

    if (counter >= 0) {
      setActiveDisabledButton(false);
      setCounter(counter => counter - 1)
    }
  }

  const onHandleChangeIndexDown = () => {
    setActiveDisabledButton(false);
    setSelectedDivDefault(false);
    setCounter(counter => counter + 1)
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
            selectedDivDefault={selectedDivDefault}
            setSelectedDivDefault={setSelectedDivDefault}
            counter={counter} />
        </div>
      </div>
      <div className="footer" >
        <Button name="" content="arrow_down" onClick={onHandleChangeIndexDown} />
        <Button name="" content="arrow_up" onClick={onHandleChangeIndexUp} />
        <Button name="Добавить" content="exist" />
      </div>
    </div>
  )
}

export default TableLeftContainer;
