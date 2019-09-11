import { compose } from 'recompose';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {

    return {
        data: state.main.dataLeft,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const asTableLeftContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)

export default asTableLeftContainer;