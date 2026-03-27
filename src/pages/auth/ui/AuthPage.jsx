import { useState } from "react";
import { AuthModal } from "../../../features/auth-by-email";
import { Loader } from "../../../shared";
export const AuthPage = () => {
  const [load, setLoad] = useState(false);
  return (
    <div>
      <AuthModal />
      {load && (
        <Loader/>
      )}
    </div>
  );
};
