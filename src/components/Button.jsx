import PropTypes from 'prop-types'

function Button({color, buttonText, onClick}) {
    return <button onClick={onClick} style={{
        backgroundColor: color
    }} className='btn'>{buttonText}</button>
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

export default Button