import { useRouter } from "expo-router";
import { Main } from "../../components/Main";
import { Providers } from "../../context/providers";
import { useAuth } from "../../context/providers/AuthProvider";
import Login from "../login";
import { useApiServices } from "../../context/ApiContext";

export default function Index() {
  const { isAuthenticated } = useAuth();
  const apiServices = useApiServices();

  return (
    <>
      {!isAuthenticated && !apiServices.getUserStorage() ? (
        <Login></Login>
      ) : (
        <Main></Main>
      )}
    </>
  );
}
