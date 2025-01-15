// Importacion de dependencias
import { useState } from "react";
import { Outlet, Navigate, Link } from "react-router-dom";


// Importacion de custom modules
import useAuth from "../hooks/useAuth"; // autenticacion del estado global

const UserLayout = () => {

    // Instanciacion de estados
    const [messagesActive, setMessagesActive] = useState(true);
    const [contactsActive, setContactsActive] = useState(true);
    const [profileActive, setProfileActive] = useState(true);
    
    // Instanciacion de la autenticacion
    const { auth, cargando, cerrarSesion } = useAuth();
    
    if(cargando) return 'cargando...'


    return( 
        <>
            <div className="flex flex-col-reverse h-screen lg:flex-row">
                <nav className=" flex justify-evenly p-3 border-t-2 border-color4 lg:flex-col lg:justify-start lg:gap-5 lg:border-r-2 lg:border-t-0">
                    <Link to={'/user/inbox'} >
                        <svg className={` ${messagesActive ? '' : ''} rounded-lg h-8 w-8 p-1 md:h-10 md:w-10 lg:p-1`}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#535C91" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" strokeWidth="2"> 
                            <path d="M8 9h8"></path> <path d="M8 13h6"></path> <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path> 
                        </svg> 
                    </Link>

                    <Link to={'/user'} >
                        <svg className={` ${profileActive ? '' : ''} rounded-lg h-8 w-8 p-1 md:h-10 md:w-10 lg:p-1`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="24" height="24" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" stroke="#535C91">
                            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                        </svg>
                    </Link>

                    <button
                        type="button"
                        onClick={cerrarSesion}
                    >
                        <i className='bx bx-log-out-circle text-color3 text-3xl' ></i>
                    </button>
                </nav>
                
                <div className="flex-1 flex flex-col lg:flex-row lg:w-full overflow-auto">

                    {/* Si auth contiene algo muestra el contenido, sino redirige a la ruta principal */}
                    { auth?._id ? <Outlet></Outlet> : <Navigate to={'/'}/>}
                    
                </div>
            </div>
        </>
    )
}

export default UserLayout;