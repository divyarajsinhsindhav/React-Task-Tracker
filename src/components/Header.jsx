import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title}) => {
  return (
    <header className='header'>
        {/* <h1 style = {styleHeader} >{title}</h1> */}
        <h1>{title}</h1>
        <Button onClick={onClick} buttonText='Add Task'/>
    </header>
  )
}

const onClick = () => {
    console.log('React');
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//CSS in JS
// const styleHeader = {
//     color: 'red',
//     backgroundColor: 'black',
// }

export default Header