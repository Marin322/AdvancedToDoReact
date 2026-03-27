export const validate = (values, isAuth) => {
    const errors = {};
    const emailRegex = /^\S+@\S+\.\S+$/;

    if (!values.email) {
        errors.email = "Введите почту";
    } else if (!emailRegex.test(values.email)) {
        errors.email = "Неверный формат почты";
    };

    if (!values.password) {
        errors.password = "Введите пароль";
    } else if (values.password.length < 6) {
        errors.password = "Пароль должен содержать не менее 6 символов";
    };
    
    return errors;
}