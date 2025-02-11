import './Home.css'
import '../../styles/global.css'
import UserForm from '../../components/organisms/UserForm/UserForm.jsx'
import UserCard from '../../components/molecules/UseCard/UseCard.jsx'
import useUsers from '../../hooks/useUsers.js'

function Home() {
  const { users, deleteUser } = useUsers()
  
  return (
    <div className="container">
      <UserForm />
      {users.map((user) => (
        <UserCard key={user.id} user={user} onDelete={deleteUser} />
      ))}
    </div>
  )
}

export default Home