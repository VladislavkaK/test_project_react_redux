import { compose } from 'recompose';
import { connect } from 'react-redux';
import { selectAll } from '../../actions/actionSelectAll';
import { selectNothing } from '../../actions/actionSelectNothing';
import { deleteSelectedAll } from '../../actions/actionDeleteSelectedAll';
import { addRowLeftTable } from '../../actions/actionAddRowInLeftTable';

const mapStateToProps = (state) => {

    return {
        data: state.main.dataRight,
        selectAll: state.main.selectAll,
        selectedData: state.main.selectedData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectAllData: (data) => dispatch(selectAll(data)),
        selectNothingData: (data) => dispatch(selectNothing(data)),
        deleteAllData: (dataId) => dispatch(deleteSelectedAll(dataId)),
        addRowLeftTable: (data) => dispatch(addRowLeftTable(data)),
    }
}

const asTableRightContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)

export default asTableRightContainer;
