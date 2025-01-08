// Importacion de dependencias
import { useState } from "react";
import { Link } from "react-router-dom";


// Importacion de custom modules
import Alerta from '../componentes/Alerta';
import clienteAxios from "../config/axios";




const Registrar = () => {

    // Declaracion de estados del formulario
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repetirPassword, setRepetirPassword] = useState('');

    // Declaracion del estado de la alerta
    const [alerta, setAlerta] = useState({});

    // Acción al enviar el formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validacion al formulario
        if([username, email, password, repetirPassword].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return;
        }
        
        if(password !== repetirPassword) {
            setAlerta({
                msg: 'Las contraseñas no coinciden',
                error: true
            })
            return;
        }

        if(password.length < 8) {
            setAlerta({
                msg: 'La contraseña es muy corta, incluye minimo 8 caracteres',
                error: true
            })
            return; 
        }

        // Limpia la alerta si no hay errores
        setAlerta({});

        try {
            const url = '/users';

            // Envia la petición al backend con axios
            await clienteAxios.post(url, {username, email, password });
            setAlerta({
                msg: 'Usuario creado correctamente, hemos enviado un correo de confirmacion a tu email'
            });
        } catch(error) {
            // Crear alerta de error de backend
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }
    }



    const { msg } = alerta;

    return(
        <>
            <div className="bg-color2 md:rounded-s-lg py-10 flex flex-col gap-8 md:gap-14 justify-center items-center p-5 md:h-full">
                <svg className="h-14 w-14 md:w-28 md:h-28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#9290C3" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" strokeWidth="2"> <path d="M5 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path> <path d="M3 21v-2a4 4 0 0 1 4 -4h4c.96 0 1.84 .338 2.53 .901"></path> <path d="M16 3.13a4 4 0 0 1 0 7.75"></path> <path d="M16 19h6"></path> <path d="M19 16v6"></path> </svg>   

                <h1 className="text-white text-center text-3xl lg:text-5xl font-black">Registrate y Crea una Red de <span className="text-color4"> Amigos!</span></h1>

            </div>
            <div className="bg-white px-4 py-5 md:py-16 md:rounded-e-lg">
                <form onSubmit={ handleSubmit }>

                    {/* Muestra alerta solo si existe algun mensaje de error */}
                    { msg && 
                        <Alerta                      
                            alerta={ alerta }
                        />
                    }

                    <div className="p-2">
                        <label className="uppercase text-gray-600 block text-base font-bold">Nombre de Usuario</label>
                        <input 
                            type="text" 
                            placeholder="Tu Nombre de Usuario"
                            className="border w-full py-2 px-5 mt-3 bg-gray-50 rounded-lg"
                            value={ username }
                            onChange={ e => setUsername(e.target.value) }
                        />
                    </div>

                    <div className="p-2">
                        <label className="uppercase text-gray-600 block text-base font-bold">Correo</label>
                        <input 
                            type="email" 
                            placeholder="Tu Correo"
                            className="border w-full py-2 px-5 mt-3 bg-gray-50 rounded-lg"
                            value={ email }
                            onChange={ e => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="p-2">
                        <label className="uppercase text-gray-600 block text-base font-bold">Contraseña</label>
                        <input 
                            type="password" 
                            placeholder="Tu Contraseña"
                            className="border w-full py-2 px-5 mt-3 bg-gray-50 rounded-lg"
                            value={ password }
                            onChange={ e => setPassword(e.target.value) }
                        />
                    </div>

                    <div className="p-2">
                        <label className="uppercase text-gray-600 block text-base font-bold">Repite tu Contraseña</label>
                        <input 
                            type="password" 
                            placeholder="Tu Contraseña"
                            className="border w-full py-2 px-5 mt-3 bg-gray-50 rounded-lg"
                            value={ repetirPassword }
                            onChange={ e => setRepetirPassword(e.target.value) }
                        />
                    </div>

                    <div  className="flex flex-col items-center">
                        <input 
                            type="submit"
                            value="Crear Cuenta"
                            className="bg-color3 hover:bg-color4 text-white mt-5 w-full py-3 px-10 rounded-lg uppercase font-bold hover:cursor-pointer md:w-auto" 
                        />                          
                    </div>
                </form>

                <nav className=' mt-10 md:mt-5 md:-mb-10 lg:flex lg:justify-between'>
                    <Link className='block text-gray-500 text-center my-5 md:my-3 ' to="/">¿Ya tienes una cuenta? <span className='text-indigo-700 font-bold'>Inicia Sesión</span></Link>
                    <Link className='block text-gray-500 text-center my-5 md:my-3 ' to="/reset-password">Olvide mi contraseña</Link>
                </nav>  
            </div>
        </>
    );
}

export default Registrar;