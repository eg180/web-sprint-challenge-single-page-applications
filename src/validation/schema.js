import * as yup from 'yup';

export default yup.object().shape({

    specialinstructions: yup
    .string()
    .min(2, 'Special Instructions must be 2 characters in length.'),

    sauce: yup
    .string()
    .required('Please select a sauce'),

    toppings: yup
    .string()
    .required('At least one topping must be selected.')


})