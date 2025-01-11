// Importacion de dependencias
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


// Importacion de custom modules
import Alerta from '../../componentes/Alerta';
import clienteAxios from "../../config/axios";



const Login = () => { 

    // Desclaracion del estado de los datos del formulario
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Declaracion del estado de la alerta
    const [alerta, setAlerta] = useState({});

    // instancia de redireccion
    const navigate = useNavigate();


    // Acción al enviar el formulario
    const handleSubmit = async (e) => {
        e.preventDefault(); 

        // Validacion al formulario
        if([email, password].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return;
        }

        //
        try {
            // Realiza peticion a backend
            const { data } = await clienteAxios.post('/users/login', {email, password});

            // Almacena en localStorage el JWT que nos retorna
            localStorage.setItem('authToken', data.token);

            // Redirige al usuario
            navigate('/user')

        } catch (error) {
            // Crea alerta de error
            setAlerta({
                msg: error.response.data.msg,
                error: true
            });
        }
    }


    const { msg } = alerta;


    return(
        <>
            <div className="bg-color2 py-10  md:rounded-s-lg flex flex-col gap-8 md:gap-14 justify-center items-center p-5 md:h-full">
                <svg className="h-14 w-14 md:w-28 md:h-28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#9290C3" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" strokeWidth="2">
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                <path d="M6 21v-2a4 4 0 0 1 4 -4h3"></path>
                <path d="M16 22l5 -5"></path>
                <path d="M21 21.5v-4.5h-4.5"></path>
                </svg>

                <h1 className="text-white text-center text-3xl lg:text-5xl font-black">Inicia Sesión y Chatea con tus <span className="text-color4">Amigos!</span></h1>
            </div>
            <div className="bg-white px-4 py-5 md:py-16 md:rounded-e-lg">
                
                {/* Muestra alerta solo si existe algun mensaje de error */}
                { msg && 
                    <Alerta                      
                        alerta={ alerta }
                    />
                }                
                
                <form onSubmit={handleSubmit}>
                    <div className="p-2">
                        <label className="uppercase text-gray-600 block text-base font-bold">Correo</label>
                        <input 
                            type="email" 
                            placeholder="Tu Correo"
                            className="border w-full py-2 px-5 mt-3 bg-gray-50 rounded-lg"
                            // tomar los valores del formulario
                            value={email}
                            onChange={ e => {
                                setEmail(e.target.value.toLowerCase()); 
                            }}
                        />
                    </div>

                    <div className="p-2">
                        <label className="uppercase text-gray-600 block text-base font-bold">Contraseña</label>
                        <input 
                            type="password" 
                            placeholder="Tu Contraseña"
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
                            value="Iniciar Sesión"
                            className="bg-color3 hover:bg-color4 text-white mt-5 w-full py-3 px-10 rounded-lg uppercase font-bold hover:cursor-pointer md:w-auto" 
                        />                          
                    </div>
                </form>

                <nav className='mt-10 md:mt-5 md:-mb-10 lg:flex lg:justify-between'>
                    <Link className='block text-gray-500 text-center my-5 md:my-3 ' to="/register">¿No tienes una cuenta? <span className='text-indigo-700 font-bold'>Registrate</span></Link>
                    <Link className='block text-gray-500 text-center my-5 md:my-3 ' to="/reset-password">Olvide mi contraseña</Link>
                </nav>               
            </div>
        </>
    );
}

export default Login;