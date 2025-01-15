import { useContext } from "react";
import UsuariosContext from "../context/UsuariosProvider";

// Crear custom hook para acceder a los valores de UsuariosContext
const useUsuarios  = () => {
    return useContext(UsuariosContext);
}

export default useUsuarios;