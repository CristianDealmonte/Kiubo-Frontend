// Importacion de dependencias
import { createContext, useState, useEffect, Children } from "react";
import { useParams } from 'react-router-dom';

// Importacion de custom modules
import clienteAxios from "../config/axios";
import { act } from "react";

const UsuariosContext = createContext();

export const UsuariosProvider = ({children}) => {

    // Asigna un estado global para los usuarios

    const [loading, setLoading] = useState(true);
    const [usuarios, setUsuarios] = useState([]);
    const [chatActivo, setChatActivo] = useState({});

    localStorage.setItem('activeChat', JSON.stringify(chatActivo));

    const activeChat = localStorage.getItem('activeChat');
    if(!activeChat) return

    useEffect(() => {
        const generarUsuarios = async () => {
            try {
                // Extrae el JWT de localstorage
                const token = localStorage.getItem('authToken');  

                // Si no se encuentra el token detiene la ejecucion
                if(!token) {
                    setLoading(false);
                    return;
                }

                // Configura los encabezados de la peticion a backend
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }

                // Consulta a back tosos los usuarios
                const { data } = await clienteAxios.get('/user', config);
                
                // Asignar el arreglo de usuarios al estado global
                setUsuarios(data);

                
            } catch (error) {
                console.log( error.response.data.msg);
            }
            
            // Detener la carga
            setLoading(false);
        }
        generarUsuarios();
    }, []);



    return(
        <UsuariosContext.Provider
            value={{
                usuarios,
                chatActivo, 
                setChatActivo,
            }}
        >
            {children}
        </UsuariosContext.Provider>
    )
}

export default UsuariosContext;