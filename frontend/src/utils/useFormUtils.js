import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export const useFormUtils = (validationSchema, defaultValues) => {
    const {
        control,
        formState: { errors },
        trigger,
        reset,
        getValues,
        setValue,
        watch,
    } = useForm({
        resolver: yupResolver(validationSchema),
        mode: 'onChange',
        defaultValues
    });

    const resetForm = () => reset(defaultValues);

    return {
        control,
        errors,
        getValues,
        setValue,
        resetForm,
        trigger,
        watch
    };
};