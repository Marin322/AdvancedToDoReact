import { LoginForm } from "./LoginForm";
export const AuthModal = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-main-bg p-0 md:justify-start">
      <aside className="md:pb-[15%] w-full bg-secondary-bg md:max-w-md border-border-secondary border-2 p-2 md:p-5 md:h-screen flex items-center">
        <LoginForm/>
      </aside>
    </div>
  );
};
