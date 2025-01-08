// Importacion de dependencias
import { Link } from "react-router-dom";
import { useState } from "react";

// Importacion de custom modules
import Alerta from '../componentes/Alerta';
import clienteAxios from "../config/axios";

const ResetPassword = () => {

    // Declaracion de estados
    const [email, setEmail] = useState('');
    const [alerta, setAlerta] = useState({});

    // Acción al enviar el formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validacion
        if(email === '') {
            setAlerta({
                msg: 'El correo es obligatorio', error: true
            });
            return;
        }

        try {
            // enviar el correo a backend
            const { data } = await clienteAxios.post('/users/reset-password', {email: email});

            // Crea alerta de exito
            setAlerta({msg: data.msg});
        } catch (error) {
            console.log(error);
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
                <path d="M6 21v-2a4 4 0 0 1 4 -4h2"></path>
                <path d="M22 16c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5z"></path>
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                </svg>

                <h1 className="text-white text-center text-3xl lg:text-5xl font-black">No Pierdas tu Acceso a Nuestra<span className="text-color4"> Aplicación</span></h1>
            </div>

            <div className="bg-white px-4 py-5 md:py-16 md:rounded-e-lg">

                {/* Muestra alerta solo si existe algun mensaje de error */}
                { msg && 
                    <Alerta                      
                        alerta={ alerta }
                    />
                }     

                <p className="block text-gray-500 text-center py-5 md:p-3">
                Coloca tu correo y te enviaremos un email con las instrucciones</p>                           

                <form onSubmit={handleSubmit}>





                    <div className="p-2">
                        <label className="uppercase text-gray-600 block text-base font-bold">Correo</label>
                        <input 
                            type="email" 
                            placeholder="Tu correo"
                            className="border w-full py-2 px-5 mt-3 bg-gray-50 rounded-lg"
                            // tomar los valores del formulario
                            value={email}
                            onChange={ e => {
                                setEmail(e.target.value.toLowerCase()); 
                            }}
                        />
                    </div>

                    <div  className="flex flex-col items-center">
                        <input 
                            type="submit"
                            value="Cambiar Contraseña"
                            className="bg-color3 hover:bg-color4 text-white mt-5 w-full py-3 px-10 rounded-lg uppercase font-bold hover:cursor-pointer md:w-auto" 
                        />                          
                    </div>
                </form>

                <nav className='mt-10 md:mt-5 md:-mb-10 lg:flex lg:justify-between'>
                    <Link className='block text-gray-500 text-center my-5 md:my-3 ' to="/">¿Ya tienes una cuenta? <span className='text-indigo-700 font-bold'>Inicia Sesión</span></Link>

                    <Link className='block text-gray-500 text-center my-5 md:my-3 ' to="/registrar">¿No tienes una cuenta? <span className='text-indigo-700 font-bold'>Registrate</span></Link>
                </nav>               
            </div>
        </>
    );
}

export default ResetPassword;