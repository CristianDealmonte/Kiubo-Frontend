import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

// Crear un custom hook para acceder a los valores de AuthContext
const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;