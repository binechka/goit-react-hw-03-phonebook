import React from "react"
import s from "./Filter.module.css"
import PropTypes from 'prop-types';
const Filter = ({value, onChange}) => {
    return<div className={s.holder}> <p className={s.title}>Find contacts by name</p>
        <input className={s.input} type="text" value={value} onChange={onChange} /></div>
}
 
Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
}
export default Filter