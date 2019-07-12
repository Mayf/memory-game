import React from 'react'
import './Card.css'
import PropTypes from 'prop-types'


const Card = (props) => {
    let style = {};
    if (props.showing) {
        style.backgroundColor = props.backgroundColor;
    }
    return (
        <div onClick={props.onClick} className='card' style={style} />
    )
};

Card.propTypes = {
    showing: PropTypes.bool.isRequired
};

export default Card