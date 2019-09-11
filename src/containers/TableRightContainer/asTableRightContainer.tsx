import { compose } from 'recompose';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {

    return {
        data: state.main.dataRight,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const asTableRightContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)

export default asTableRightContainer;