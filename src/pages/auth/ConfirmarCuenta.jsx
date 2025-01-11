// Importacion de dependencias
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


// Importacion de custom modules
import clienteAxios from "../../config/axios";
import Alerta from "../../componentes/Alerta";


const ConfirmarCuenta = () => {

    // Declaracion de estados
    const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
    const [cargando, setCargando] = useState(true);
    const [alerta, setAlerta] = useState({});



    // Tomar token de la URL
    const params = useParams();
    const { token } = params;

    // Realizar la consulta a backend en cuanto se detecte el token de la URL
    useEffect( () => {
        const confirmarCuenta = async () => {
            try {
                // Contruye la URL a la que se hara la request
                const URL = `/users/confirm/${token}`;

                // Realizar peticion a backend
                const { data } = await clienteAxios.get(URL);

                // Mostrar enlaces
                setCuentaConfirmada(true);

                // Alerta de exito
                setAlerta({
                    msg: data.msg,
                    error: false
                });

            } catch (error) {
                // Alerta de error
                setAlerta({
                    msg: error.response.data.msg,
                    error: true,
                });
            }
            setCargando(false);
        }
        confirmarCuenta();
    },[]);



    return(
        <>
            <div className="bg-color2 py-10  md:rounded-s-lg flex flex-col gap-8 md:gap-14 justify-center items-center p-5 md:h-full">
                <svg className="h-14 w-14 md:w-28 md:h-28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#9290C3" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" strokeWidth="2">
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
                <path d="M15 19l2 2l4 -4"></path>
                </svg>

                <h1 className="text-white text-center text-3xl lg:text-5xl font-black">Confirma tu Cuenta y <span className="text-color4">comienza a Chatear</span></h1>
            </div>
            
            <div className="bg-white px-4 py-5 md:py-16 md:rounded-e-lg flex flex-col justify-center gap-5">

                {!cargando &&
                    <Alerta
                        alerta = {alerta}
                    />
                }


                {cuentaConfirmada && (
                    <Link className='block text-center my-5 text-gray-500' to="/"><span className='text-indigo-700 font-bold'>Inicia Sesión</span></Link>
                )}
                
            </div>
        </>
    );
}

export default ConfirmarCuenta;