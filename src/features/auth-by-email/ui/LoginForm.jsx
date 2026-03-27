import { Input, Button } from "../../../shared"
export const LoginForm = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full gap-2">
            <h1 className="text-2xl mb-7">Авторизация</h1>
            <Input label="Эл. Почта" error="" placeholder="Электронная почта..."/>
            <Input label="Пароль" error="" placeholder="Пароль..."/>
            <Button children="Войти" className="mt-4"/>
        </div>
    )
}