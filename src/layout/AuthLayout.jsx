// Importacion de dependencias
import { Outlet } from 'react-router-dom';




const AuthLayout = () => {
    return(
        <>
            <h1>Desde Auth Layout</h1>

            {/* Inserta el contenido de cada page */}
            <Outlet></Outlet> 
        </>
    );
}

export default AuthLayout;