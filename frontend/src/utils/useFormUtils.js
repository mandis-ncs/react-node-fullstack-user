import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export const useFormUtils = (
    validationSchema,
    defaultValues
) => {
    const {
        control,
        formState: { errors },
        getValues,
        setValue,
        handleSubmit,
        reset,
        watch,
        register,
        formState,
        trigger
    } = useForm({
        resolver: yupResolver(validationSchema),
        reValidateMode: 'onChange',
        mode: 'all',
        defaultValues
    });

    const resetForm = () => reset(defaultValues);

    return {
        control,
        errors,
        getValues,
        setValue,
        resetForm,
        handleSubmit,
        register,
        trigger,
        watch,
        formState
    };
}