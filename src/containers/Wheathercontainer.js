import { connect } from 'react-redux';
import { getWheather } from '../actions/index';
import PrintWheater from '../components/PrintWheather';

const mapStateToProps = state => {
  return {
    wheather: state.wheather
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getWheather: (city) => dispatch(getWheather(city))
  }
}
export default connect(
mapStateToProps,
mapDispatchToProps
)(PrintWheater)