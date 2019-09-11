import { dataLeftColumn, dataRightColumn } from '../../utills/data';

const initialState: any = {
    dataLeft : dataLeftColumn,
    dataRight : dataRightColumn,
}

function mainReducer (state = initialState, action: any) {
    switch (action.type) {
        default:
            return state;
    }
}

export default mainReducer;