// import PropTypes from 'prop-types';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import { connect } from 'react-redux';
import { changeFilter } from '../../redux/phonebook/phone-actions';

function Filter() {
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <label className="filter-label">
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
        className="filter-input"
      />
    </label>
  );
}

// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(changeFilter(e.target.value)),
// });

export default Filter;

// Filter.propTypes = {
//   value: PropTypes.string,
//   onChange: PropTypes.func,
// };
