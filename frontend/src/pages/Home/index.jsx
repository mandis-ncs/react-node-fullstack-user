import { useEffect, useState, useRef } from 'react'
import './style.css'
import Trash from '../../assets/trash.svg'
import api from '../../services/api.js'

function Home() {

  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputEmail = useRef()

  async function getUsers() {
    const usersFromApi = await api.get('/users')
    setUsers(usersFromApi.data)
  }

  async function createUser() {
    await api.post('/users', {
      name: inputName.current.value,
      email: inputEmail.current.value
    })
    getUsers()
  }

  async function deleteUser(id) {
    await api.delete(`/users/${id}`)
    getUsers()
  }
  
  useEffect(() => {
    getUsers()
  }, [])


  return (
    <div className='container'>
      <form>
        <h1>Register</h1>
        <input placeholder='Name' name='name' type='text' ref={inputName}></input>
        <input placeholder='Email' name='email' type='email' ref={inputEmail}></input>
        <button type='button' onClick={createUser}>Register</button>
      </form>

      {users.map(user => (

        <div key={user.id} className='card' >
          <div>
            <p>Name: <span>{user.name}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button onClick={() => deleteUser(user.id)}>
            <img src={Trash} />
          </button>
        </div>
      ))}

    </div >
  )
}

export default Home
