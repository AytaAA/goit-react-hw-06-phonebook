import React from "react";
import style from "./Filter.module.css";
import { connect } from "react-redux";
import contactActions from "../../redux/contacts/contacts-actions";

const Filter = ({ value, onChange }) => (
  <label className={style.filter_label}>
    Find contacts by name
    <br />
    <input type="text" value={value} onChange={onChange} />
  </label>
);

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(contactActions.resetFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
