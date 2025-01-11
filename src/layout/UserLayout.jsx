// Importacion de dependencias
import { Outlet, Navigate } from "react-router-dom";


// Importacion de custom modules
import useAuth from "../hooks/useAuth"; // autenticacion del estado global

const UserLayout = () => {

    // Instanciacion de la autenticacion
    const { auth, cargando } = useAuth();

    if(cargando) return 'cargando...'


    return(
        <>
            <h1>Esta es una ruta protegida</h1>

            {/* Si auth contiene algo muestra el contenido, sino redirige a la ruta principal */}
            { auth?._id ? <Outlet></Outlet> : <Navigate to={'/'}/>}

                
        </>
    )
}

export default UserLayout;