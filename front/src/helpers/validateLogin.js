export default function ValidateLogin(user) {
    const errors = {}
    if (!user.email) errors.email = 'Campo requerido'

    if (!user.password) errors.password = 'Campo requerido'

    return errors
}
