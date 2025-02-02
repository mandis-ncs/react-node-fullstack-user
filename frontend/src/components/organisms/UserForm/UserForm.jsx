import './UserForm.css'
import Title from '../../atoms/Title/Title'
import { useFormUtils } from '../../../utils/useFormUtils.js'
import { validationSchemaUser } from '../../../schemas/Schema'
import { Controller } from 'react-hook-form'
import { useCallback } from 'react'
import useUsers from '../../../hooks/useUsers.js'


function UserForm() {
    const { errors, trigger, getValues, control } = useFormUtils(validationSchemaUser, {
        email: '',
        name: ''
    })

    const { createUser } = useUsers()

    const handleSubmit = useCallback(async (event) => {
        const isValid = await trigger()

        if (isValid) {
            console.log("DADOS SENDO ENVIADOS", getValues())
            const dataForm = getValues()
            createUser(event, dataForm)
        } else {
            console.log('Erros:', errors);
        }
    }, [errors, trigger, getValues, createUser])

    return (
        <form className="form">
            <Title>Register</Title>

            <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <input
                        {...field}
                        value={field.value || ""}
                        onChange={field.onChange}
                        placeholder="Name"
                    />
                )}
            />
            {errors.name && <p className="error">{errors.name.message}</p>}

            <Controller
                name="email"
                control={control}
                render={({ field }) => (
                    <input
                        {...field}
                        value={field.value || ""}
                        onChange={field.onChange}
                        placeholder="Email"
                    />
                )}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}

            <button type="button" onClick={(event) => handleSubmit(event)}>
                Register
            </button>
        </form>
    )
}

export default UserForm