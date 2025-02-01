import './UserCard.css'
import TrashIcon from '../../../assets/imgs/trash.svg'
import Button from '../../atoms/Button'
import PropTypes from 'prop-types'

function UserCard({ user, onDelete }) {
    return (
        <div className="card">
            <div>
                <p>
                    Name: <span>{user.name}</span>
                </p>
                <p>
                    Email: <span>{user.email}</span>
                </p>
            </div>
            <Button onClick={() => onDelete(user.id)}>
                <img src={TrashIcon} alt="Delete" />
            </Button>
        </div>
    )
}

UserCard.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default UserCard