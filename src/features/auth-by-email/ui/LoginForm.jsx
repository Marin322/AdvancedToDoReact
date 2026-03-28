import { useState } from "react";
import { Input, Button } from "../../../shared";
import { validate } from "../model/validate";
export const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData, true);
    setErrors(validationErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-2">
      <h1 className="text-2xl mb-7">Авторизация</h1>
      <Input
        label="Эл. Почта"
        error={errors?.email}
        placeholder="Электронная почта..."
        value={formData.email}
        name="email"
        onChange={handleChange}
      />
      <Input
        label="Пароль"
        error={errors?.password}
        placeholder="Пароль..."
        value={formData.password}
        name="password"
        onChange={handleChange}
      />
      <Button children="Войти" className="mt-4 shadow-lg shadow-purple-700" onClick={handleSubmit}/>
    </div>
  );
};
