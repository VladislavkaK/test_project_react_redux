import { useState } from 'react';

export const useFuncTableRight = (deleteAllData, addRowLeftTable, data, selectAllData, selectAll, selectedData, selectNothingData) => {
    const [activeDeleteAll, setDeleteAll] = useState(false);
    const [selectedCheckboxIndex, setSelectedCheckboxIndex] = useState([]);

    return {
        activeDeleteAll: activeDeleteAll,
        setDeleteAll: setDeleteAll,
        selectedCheckboxIndex: selectedCheckboxIndex,
        setSelectedCheckboxIndex: setSelectedCheckboxIndex,
        onHandleDeleteCheckbox: () => {
            if (selectAll) {
                deleteAllData(selectedData)
                addRowLeftTable(selectedData)
            } else if (!selectAll) {
                deleteAllData(selectedData)
                addRowLeftTable(selectedData)
            }

            deleteAllData(selectedCheckboxIndex)
            addRowLeftTable(selectedCheckboxIndex)
        },
        onHandleSelectAll: () => {
            selectAllData(data);
        },
        onHandleSNothingData: () => {
          selectNothingData(data);
        },
    }
}
