// import * as yup from 'yup'

// const signinSchema = yup.object().shape({
//     email: yup.string().email('E-mail inválido...').required('E-mail é obrigatório...'),
//     password: yup.string().min(6, 'A senha deve conter no mínimo seis caracteres').required('Senha é obrigatória...')
// })

// const signupSchema = signinSchema.concat(
//     yup.object().shape({
//         firstname: yup.string().required('Nome é obrigatório'),
//         lastname: yup.string().required('Sobrenome é obrigatório'),
//         confirmPassword: yup.string().required('Senha de confirmação é obrigatória').oneOf([yup.ref('password'), null], 'A senha de confirmação não confere...')
//     }) 
// )

// export { signinSchema, signupSchema }
