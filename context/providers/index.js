import { ApiProvider } from "../ApiContext";
import { AuthProvider } from "./AuthProvider";

export const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <ApiProvider>{children}</ApiProvider>
    </AuthProvider>
  );
};
