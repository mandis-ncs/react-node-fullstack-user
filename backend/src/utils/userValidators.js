import Joi from 'joi';

export const createUserValidation = Joi.object({
    name: Joi.string()
        .min(3)
        .max(80)
        .pattern(/^[A-Za-z\s]+$/)
        .required()
        .messages({
            'string.empty': 'Name cannot be empty.',
            'string.pattern.base': 'Name should contain only letters.',
            'string.min': 'Name should have at least 3 characters.',
            'string.max': 'Name should have less than 80 characters.',
        }),
    email: Joi.string()
        .email()
        .required()
        .messages({
            'string.empty': 'Email cannot be empty.',
            'string.email': 'Invalid email format.',
        }),
})