import { compose } from 'recompose';
import { connect } from 'react-redux';
import { deleteRow } from '../../actions/actionDeleteRow';
import { addRow } from '../../actions/actionAddRowInRightTable';

const mapStateToProps = (state) => {

    return {
        data: state.main.dataLeft,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteRow: (id) => dispatch(deleteRow(id)),
        addRow: (data) => dispatch(addRow(data))
    }
}

const asTableLeftContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)

export default asTableLeftContainer;
