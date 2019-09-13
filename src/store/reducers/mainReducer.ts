import { dataLeftColumn, dataRightColumn } from '../../utills/data';

const initialState: any = {
    dataLeft : dataLeftColumn,
    dataRight : dataRightColumn,
}

function mainReducer (state = initialState, action: any) {
    switch (action.type) {
        case "SELECT_ALL_DATA":
            return SELECT_ALL_DATA(state, action);
        case "ADD_ROW":
            return ADD_ROW(state, action);
        case "DELETE_ROW":
            return DELETE_ROW(state, action);
        case "SELECT_NOTHING_DATA":
            return SELECT_NOTHING_DATA(state, action);
        case "DELETE_SELECTED_ALL_DATA":
            return DELETE_SELECTED_ALL_DATA(state, action);
        case "ADD_ROW_LEFT_TABLE":
            return ADD_ROW_LEFT_TABLE(state, action);
        default:
            return state;
    }
}

function SELECT_ALL_DATA(state, action) {
    const { data } = action;
    let newData = [];

    for (let key in data) {
        newData.push({ id: data[key].id, items: {
            id: data[key].id,
            artNo: data[key].artNo,
            name: data[key].name,
            description: data[key].description,
            checked: true
        } })
    }

    return {
        ...state,
        dataRight: state.dataRight.map(item => {
            return {
                ...item,
                checked: true
            }
        }),
        selectedData: newData,
        selectAll: true
    };
}

function ADD_ROW (state, action) {
    const { row: { id, artNo, name, description } } = action;

    return {
        ...state,
        dataRight: [
            ...state.dataRight,
            { id, artNo, name, description }
        ]
    }
}

function DELETE_ROW (state, action) {
    const { idRow } = action;

    const dataLeft = state.dataLeft.filter((data, index) => {
        return index !== idRow
    })

    return { ...state, dataLeft }
}

function SELECT_NOTHING_DATA(state, action) {
    const { data } = action;
    let newData = [];

    for (let key in data) {
        newData.push({ id: data[key].id, items: {
            id: data[key].id,
            artNo: data[key].artNo,
            name: data[key].name,
            description: data[key].description,
            checked: false
        } })
    }

    return {
        ...state,
        dataRight: state.dataRight.map(item => {
            return {
                ...item,
                checked: false
            }
        }),
        selectedData: newData,
        selectAll: false
    };
}

function DELETE_SELECTED_ALL_DATA(state, action) {
    const { data } = action;

    for (let key in data) {
        for (let index in state.dataRight) {
            if (data[key].id === state.dataRight[index].id) {
                delete state.dataRight[index];
            }
        }
    }

    const newData = state.dataRight.map(item => {

        if (item !== null) {

            return {
                id: item.id,
                artNo: item.artNo,
                name: item.name,
                description: item.description,
                checked: false
            }
        }
    })

    return { ...state, dataRight: newData || data };
}

function ADD_ROW_LEFT_TABLE (state, action) {
    const { row } = action;

    let newData = [...state.dataLeft];
    for (let key in row) {
        newData.push({
            id: row[key].items.id,
            artNo: row[key].items.artNo,
            name: row[key].items.name,
            description: row[key].items.description,
            checked: false,
        });
    }

    return {
        ...state,
        dataLeft: newData
    }
}


export default mainReducer;
