import { useState } from 'react';

export const useContent = (deleteRow, addRow, data) => {
    const [activeAdd, setActiveAdd] = useState(false);
    const [idRow, setIdRow] = useState();

    return {
        activeAdd: activeAdd,
        setActiveAdd: setActiveAdd,
        idRow: idRow,
        setIdRow: setIdRow,
        onHandleClickChangeData: (index) => {
            let itemsForAdd = null;

            for (let key in data) {
                if (key == index) {
                    itemsForAdd = {
                        id: data[key].id,
                        artNo: data[key].artNo,
                        name: data[key].name,
                        description: data[key].description
                    }
                }
            }

            if (itemsForAdd !== null) {
                setActiveAdd(true);
                deleteRow(index);
                addRow(itemsForAdd)
            }
        }
    }
}