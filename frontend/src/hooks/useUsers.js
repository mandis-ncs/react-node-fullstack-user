import { useState, useEffect, useRef } from 'react'
import api from '../services/api.js'

function useUsers() {
    const [users, setUsers] = useState([])
    const inputName = useRef(null)
    const inputEmail = useRef(null)

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        try {
            const response = await api.get('/users')
            setUsers(response.data)
        } catch (error) {
            console.error('Error fetching users:', error)
        }
    }

    const createUser = async (event) => {
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

    const deleteUser = async (id) => {
        try {
            await api.delete(`/users/${id}`)
            getUsers();
        } catch (error) {
            console.error('Error deleting user:', error)
        }
    }

    return {
        users,
        inputName,
        inputEmail,
        createUser,
        deleteUser,
    }
}

export default useUsers