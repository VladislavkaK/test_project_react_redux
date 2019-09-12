import { dataLeftColumn, dataRightColumn } from '../../utills/data';

const initialState: any = {
    dataLeft : dataLeftColumn,
    dataRight : dataRightColumn,
}

function mainReducer (state = initialState, action: any) {
    switch (action.type) {
        case "SELECT_ALL_DATA":
            return SELECT_ALL_DATA(state, action);
        case "SELECT_NOTHING_DATA":
            return SELECT_NOTHING_DATA(state, action);
        case "DELETE_SELECTED_ALL_DATA":
            return DELETE_SELECTED_ALL_DATA(state, action);    
        default:
            return state;
    }
}

function SELECT_ALL_DATA(state, action) {

    return {
        ...state,
        dataRight: state.dataRight.map(item => {
            return {
                ...item,
                checked: true
            }
        })
    };
}

function SELECT_NOTHING_DATA(state, action) {

    return {
        ...state,
        dataRight: state.dataRight.map(item => {
            return {
                ...item,
                checked: false
            }
        })
    };
}

function DELETE_SELECTED_ALL_DATA(state, { dataId }) {

    const data = state.dataRight.filter((data, index) => {
        data.id !== dataId[index].id
    })

    return { ...state, dataRight: data };
}

export default mainReducer;