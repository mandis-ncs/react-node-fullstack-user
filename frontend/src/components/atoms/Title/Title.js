import './Title.css'
import PropTypes from 'prop-types'

function Title({ children }) {
    return <h1 className='title'>{children}</h1>
}

Title.propTypes =  {
    children: PropTypes.node.isRequired,
}

export default Title