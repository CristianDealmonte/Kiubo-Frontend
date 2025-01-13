// Importacion de dependencias
import { useState, useEffect, createContext } from "react";


// Importacion de custom modules
import clienteAxios from "../config/axios";


// Creacion de una instancia de un contexto
const AuthContext = createContext();

// Retorna los datos del estado global
const AuthProvider = ({children}) => {

    const [cargando, setCargando] = useState(true); // Estado de carga de la autenticacion
    const [auth, setAuth] = useState({}) // Estado de la autenticacion del usuario

    // Inicia la autenticacion al cargar la app
    useEffect( () => {
        const autenticarUsuario = async () => {
            // Extrae el JWT de localstorage
            const token = localStorage.getItem('authToken');  

            // Si no se encuentra el token detiene la ejecucion
            if(!token) {
                setCargando(false);
                return;
            }

            // Configura los encabezados de la peticion a backend
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            try {
                // realiza la peticion a backend
                const { data } = await clienteAxios.get('/auth/perfil', config);

                // agregaar al estado global el JWT
                setAuth(data);
                
            } catch (error) {
                console.log(error.response.data.msg);
                setAuth({});
            }

            //  
            setCargando(false);


        }
        autenticarUsuario();
    }, []);


    return(
        <AuthContext.Provider
            // Elementos que se pondran a disposicion en los diferentes componentes
            value={{
                auth, 
                setAuth,
                cargando
            }}
        >
            {/* Toma como elementos hijos  todos los componentes que rodea */}
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider,
}

export default AuthContext;





