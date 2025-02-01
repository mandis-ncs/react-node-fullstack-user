import { useEffect, useState, useRef } from 'react'
import './Home.css'
import api from '../../services/api.js'
import UserForm from '../../components/organisms/UserForm/UserForm'
import UserCard from '../../components/molecules/UseCard/UseCard'

function Home() {
  const [users, setUsers] = useState([])
  const inputName = useRef(null);
  const inputEmail = useRef(null);

  useEffect(() => {
    getUsers()
  }, []);

  async function getUsers() {
    try {
      const response = await api.get('/users')
      setUsers(response.data)
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }

  async function createUser(event) {
    event.preventDefault()
    try {
      await api.post('/users', {
        name: inputName.current.value,
        email: inputEmail.current.value,
      })
      getUsers();
    } catch (error) {
      console.error('Error creating user:', error)
    }
  }

  async function deleteUser(id) {
    try {
      await api.delete(`/users/${id}`);
      getUsers()
    } catch (error) {
      console.error('Error deleting user:', error)
    }
  }

  return (
    <div className="container">
      <UserForm onSubmit={createUser} nameRef={inputName} emailRef={inputEmail} />
      {users.map((user) => (
        <UserCard key={user.id} user={user} onDelete={deleteUser} />
      ))}
    </div>
  )
}

export default Home