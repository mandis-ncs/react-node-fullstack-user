import './UserForm.css'
import Input from '../../atoms/Input/Input'
//import Button from '../../atoms/Button/Button'
import Title from '../../atoms/Title/Title'
import { useFormUtils } from '../../../utils/useFormUtils.js'
import { validationSchemaUser } from '../../../schemas/Schema'
import { Controller } from 'react-hook-form'
import { useCallback } from 'react'
//import useUsers from '../../hooks/useUsers.js'

function UserForm() {

    const { errors, register, trigger, control } = useFormUtils(validationSchemaUser,
        {
            email: '',
            name: ''
        }
    );

    //const { createUser } = useUsers()

    const handleSubmit = useCallback ( async () => {
        const isValid = await trigger()
        console.log(errors)
        if (isValid) {
            console.log('ok')
        }
    }, [trigger, errors])

    return (
        <form className="form">
            <Title>Register</Title>
            <Controller
                name="name"
                control={control}
                render={({ field }) => (
                    <Input
                        value={field.name}
                        placeholder="Name" type="text" />
                )}
            />

            <Input {...register("email")} error={!!errors.email} placeholder="Email" type="email" />
            <button type="button" onClick={() => handleSubmit()}>Register</button>
        </form>
    )
}

export default UserForm