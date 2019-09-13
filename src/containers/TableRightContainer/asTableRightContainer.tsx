import { compose } from 'recompose';
import { connect } from 'react-redux';
import { selectAll } from '../../actions/actionSelectAll';
import { selectNothing } from '../../actions/actionSelectNothing';
import { deleteSelectedAll } from '../../actions/actionDeleteSelectedAll';
import { addRowLeftTable } from '../../actions/actionAddRowInLeftTable';

const mapStateToProps = (state) => {

    return {
        data: state.main.dataRight,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectAllData: () => dispatch(selectAll()),
        selectNothingData: () => dispatch(selectNothing()),
        deleteAllData: (dataId) => dispatch(deleteSelectedAll(dataId)),
        addRowLeftTable: (data) => dispatch(addRowLeftTable(data)),
    }
}

const asTableRightContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)

export default asTableRightContainer;