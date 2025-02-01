import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import './Input.css'

const Input = forwardRef(({ placeholder, type }, ref) => (
  <input
    className="input"
    placeholder={placeholder}
    type={type}
    ref={ref}
  />
))

Input.displayName = 'Input'

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}

export default Input
