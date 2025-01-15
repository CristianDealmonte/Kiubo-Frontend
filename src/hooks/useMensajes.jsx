import { useContext } from "react";
import MensajesContext from "../context/MensajesProvider";

// Crear un custom hook para acceder a los valores de MensajesContext
const useMensajes = () => {
    return useContext(MensajesContext);
}

export default useMensajes;