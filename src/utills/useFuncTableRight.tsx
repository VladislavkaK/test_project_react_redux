import { useState } from 'react';

export const useFuncTableRight = (deleteAllData, addRowLeftTable, data) => {
    const [activeDeleteAll, setDeleteAll] = useState(false);
    const [selectedCheckboxIndex, setSelectedCheckboxIndex] = useState([]);

    return {
        activeDeleteAll: activeDeleteAll,
        setDeleteAll: setDeleteAll,
        selectedCheckboxIndex: selectedCheckboxIndex,
        setSelectedCheckboxIndex: setSelectedCheckboxIndex,
        onHandleDeleteCheckbox: () => {
            deleteAllData(selectedCheckboxIndex)
            addRowLeftTable(selectedCheckboxIndex)
        }
    }
}