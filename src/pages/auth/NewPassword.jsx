// Importacion de dependencias
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";


// Importacion de custom modules
import Alerta from '../../componentes/Alerta';
import clienteAxios from "../../config/axios";



const NewPassword = () => { 
    // Declaracion de estados
    const [alerta, setAlerta] = useState({});
    const [tokenValido, setTokenValido] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordModificado, setPasswordModificado] = useState(false);


    // Tomar token de la URL
    const params = useParams();
    const { token } = params;

    // Ejecucion al detectar el token de la URL
    useEffect(() =>{
        const comprobarToken = async () => {
            try {
                // realiza peticion a backend
                await clienteAxios(`/auth/reset-password/${token}`);

                setAlerta({
                    msg: 'Crea una nueva contraseña'
                });

                // Renderizar el formulario
                setTokenValido(true);
            } catch (error) {
                setAlerta({
                    msg: 'Hubo un error en el enlace',
                    error: true
                })
            }
        };
        comprobarToken();
    }, []);

    // Accion al enviar el formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación
        if(password.length < 8) {
            setAlerta({
                msg: 'La contraseña es muy corta, incluye minimo 8 caracteres',
                error: true
            });
            return;
        }

        try {
            // Construir URL para la peticion a backend
            const URL = `/auth/reset-password/${token}`;

            // Realizar peticion a backend
            const { data } = await clienteAxios.post(URL, {password});

            // Alerta de exito
            setAlerta({ msg: data.msg });

            // Renderizar enlaces
            setPasswordModificado(true);

        } catch (error) {
            // Alerta de error
            setAlerta({
                msg: error.response.data.msg,
                error: true
            });
        }


    }

    // Limpiar alerta si no hay errores
    const { msg } = alerta;

    return(
        <>
            <div className="bg-color2 py-10  md:rounded-s-lg flex flex-col gap-8 md:gap-14 justify-center items-center p-5 md:h-full">
                <svg className="h-14 w-14 md:w-28 md:h-28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#9290C3" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" strokeWidth="2">
                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h3.5"></path>
                    <path d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39z"></path>
                </svg>

                <h1 className="text-white text-center text-3xl lg:text-5xl font-black">Reestable tu Contraseña y <span className="text-color4">Recupera tu Acceso</span></h1>
            </div>
            <div className="bg-white px-4 py-5 md:py-16 md:rounded-e-lg">
                
                {/* Muestra alerta solo si existe algun mensaje de error */}
                { msg && 
                    <Alerta                      
                        alerta={ alerta }
                    />
                }                
                

                {/* renderiza si el token es valido */}
                { tokenValido && (
                    <form onSubmit={handleSubmit}>
                        <div className="p-2">
                            <label className="uppercase text-gray-600 block text-base font-bold">Nueva Contraseña</label>
                            <input 
                                type="password" 
                                placeholder="Nueva Contraseña"
                                className="border w-full py-2 px-5 mt-3 bg-gray-50 rounded-lg"
                                // tomar los valores del formulario
                                value={password}
                                onChange={ e => {
                                    setPassword(e.target.value);
                                }}
                                
                                />
                        </div>

                        <div  className="flex flex-col items-center">
                            <input 
                                type="submit"
                                value="Restablecer Contraseña"
                                className="bg-color3 hover:bg-color4 text-white mt-5 w-full py-3 px-10 rounded-lg uppercase font-bold hover:cursor-pointer md:w-auto" 
                                />                          
                        </div>
                    </form>
                )}

                {/* Renderiza si el password se modifico correctamente */}
                { passwordModificado && (
                    <nav className='mt-10 md:mt-5 md:-mb-10 lg:flex lg:justify-between flex flex-col justify-center gap-5'>
                        <Link className='block text-center my-5 text-gray-500' to="/"><span className='text-indigo-700 font-bold'>Inicia Sesión</span></Link>
                    </nav>               
                )}
            </div>
        </>
    );
}

export default NewPassword;