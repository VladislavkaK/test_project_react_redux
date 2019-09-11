import * as React from 'react';
import { useState, useEffect } from 'react';

import './styles/style.scss';

const TableLeftContainer = (props) => {
    const [activeRow, setActiveRow] = useState(false);
    const [active, setActive] = useState(false);
    let classActiveRow = '';
    let classActive = '';

    if (activeRow) {
        classActiveRow = 'active-row-default';
    }

    if (active) {
        classActive = 'active-row'
    }

    useEffect(() => {
        setActiveRow(!activeRow)
    }, [])

    const onChangeColorRow = () => {
        setActiveRow(false)
        setActive(!active)
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
                        <div className={`table-row ${classActiveRow}`} onClick={onChangeColorRow} >
                            <div className={`wrapper text-4`}>
                                <div className="wrapper text-2">
                                    <div className="text-one">1004991</div>
                                    <div className="text-two">Процессор AMD Athlon X4 840 OEM</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className={`table-row ${classActive}`}  onClick={onChangeColorRow} >
                            <div className="wrapper text-4">
                                <div className="wrapper text-2">
                                    <div className="text-one">1214059</div>
                                    <div className="text-two">Процессор Intel Celeron G4900 OEM</div>
                                </div>
                            </div>
                        </div>

                        <div className={`table-row ${classActive}`} onClick={onChangeColorRow} >
                            <div className="wrapper text-4">
                                <div className="wrapper text-2">
                                    <div className="text-one">1410125</div>
                                    <div className="text-two">Процессор Intel Xeon E3-1270 v6 OEM</div>
                                </div>
                            </div>
                        </div>

                        <div className={`table-row ${classActive}`} onClick={onChangeColorRow} >
                            <div className="wrapper text-4">
                                <div className="wrapper text-2">
                                    <div className="text-one">1572667</div>
                                    <div className="text-two">Процессор AMD Ryzen 7 3700X OEM</div>
                                </div>
                            </div>
                        </div>

                        <div className="table-row">
                            <div className="wrapper text-4">
                                <div className="wrapper text-2">
                                    <div className="text-one">1629630</div>
                                    <div className="text-two">Процессор Intel Core i7-9700KF BOX</div>
                                </div>
                            </div>
                        </div>

                        <div className="table-row">
                            <div className="wrapper text-4">
                                <div className="wrapper text-2">
                                    <div className="text-one">1729630</div>
                                    <div className="text-two">Процессор AMD Ryzen 5 2600X OEM</div>
                                </div>
                            </div>
                        </div>

                        <div className="table-row">
                            <div className="wrapper text-4">
                                <div className="wrapper text-2">
                                    <div className="text-one">1829630</div>
                                    <div className="text-two">Процессор Intel Core i5-9400F BOX</div>
                                </div>
                            </div>
                        </div>

                        <div className="table-row">
                            <div className="wrapper text-4">
                                <div className="wrapper text-2">
                                    <div className="text-one">1929630</div>
                                    <div className="text-two">Процессор AMD Ryzen 5 2600X BOX</div>
                                </div>
                            </div>
                        </div>

                        <div className="table-row">
                            <div className="wrapper text-4">
                                <div className="wrapper text-2">
                                    <div className="text-one">2029630</div>
                                    <div className="text-two">Процессор Intel Core i3-9350KF BOX</div>
                                </div>
                            </div>
                        </div>

                        <div className="table-row">
                            <div className="wrapper text-4">
                                <div className="wrapper text-2">
                                    <div className="text-one">2129630</div>
                                    <div className="text-two">Процессор Intel Core i3-9350KF OEM</div>
                                </div>
                            </div>
                        </div>

                        <div className="table-row">
                            <div className="wrapper text-4">
                                <div className="wrapper text-2">
                                    <div className="text-one">2229630</div>
                                    <div className="text-two">Процессор Intel Core i5-7400 OEM</div>
                                </div>
                            </div>
                        </div>

                        <div className="table-row">
                            <div className="wrapper text-4">
                                <div className="wrapper text-2">
                                    <div className="text-one">2329630</div>
                                    <div className="text-two">Процессор Intel Core i5-7500 OEM</div>
                                </div>
                            </div>
                        </div>

                        <div className="table-row">
                            <div className="wrapper text-4">
                                <div className="wrapper text-2">
                                    <div className="text-one">2429630</div>
                                    <div className="text-two">Процессор Intel Core i5-8400 OEM</div>
                                </div>
                            </div>
                        </div>

                        <div className="table-row">
                            <div className="wrapper text-4">
                                <div className="wrapper text-2">
                                    <div className="text-one">2529630</div>
                                    <div className="text-two">Процессор Intel Core i5-9400 OEM</div>
                                </div>
                            </div>
                        </div>

                        <div className="table-row">
                            <div className="wrapper text-4">
                                <div className="wrapper text-2">
                                    <div className="text-one">2629630</div>
                                    <div className="text-two">Процессор Intel Core i5-9500F BOX</div>
                                </div>
                            </div>
                        </div>

                        <div className="table-row">
                            <div className="wrapper text-4">
                                <div className="wrapper text-2">
                                    <div className="text-one">2729630</div>
                                    <div className="text-two">Процессор AMD Ryzen 5 3600 OEM</div>
                                </div>
                            </div>
                        </div>
                
                    </div>
                </div>
            <div className="footer" >
                <div className="footer-arrow-button__down" >
                    <button type="button" className="arrow-button">
                        <span className="arrow-down"></span>
                    </button>
                </div>
                <div className="footer-arrow__up" >
                    <button type="button" className="arrow-button">
                        <span className="arrow-up"></span>
                    </button>
                </div>
                <div className="footer-arrow__add" >
                    <button type="button" className="arrow-button">
                        <span className="arrow-add">Добавить</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TableLeftContainer;