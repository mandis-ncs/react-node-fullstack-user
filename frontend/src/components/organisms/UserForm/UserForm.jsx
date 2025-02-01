import './UserForm.css'
import Input from '../../atoms/Input/Input'
import Button from '../../atoms/Button/Button'
import Title from '../../atoms/Title/Title'
import PropTypes from 'prop-types'

function UserForm({ onSubmit, nameRef, emailRef }) {
    return (
        <form className="form" onSubmit={onSubmit}>
            <Title>Register</Title>
            <Input placeholder="Name" type="text" ref={nameRef} />
            <Input placeholder="Email" type="email" ref={emailRef} />
            <Button>Register</Button>
        </form>
    )
}

UserForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    nameRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ]).isRequired,
    emailRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ]).isRequired,
}

export default UserForm