import { useContext } from "react";
import SocketContext from "../context/socketProvider";

// Crear custom hook para acceder a los valores de UsuariosContext
const useSocket  = () => {
    return useContext(SocketContext);
}

export default useSocket;