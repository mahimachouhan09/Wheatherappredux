import { connect } from 'react-redux';
import { getWheather, getHistory } from '../actions/index';
import History from '../components/History';

const mapStateToProps = state => {
  return {
    history: state.history
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getHistory: (city) => dispatch(getHistory(city))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History)