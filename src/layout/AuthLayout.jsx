// Importacion de dependencias
import { Outlet } from 'react-router-dom';




const AuthLayout = () => {
    return(
        <>
            <div className="min-h-screen flex  lg:grid items-center">
                <main className='container my-4 mx-auto w-11/12 md:grid md:grid-cols-2 md:py-10'>
                    {/* Inserta el contenido de cada page */}
                    <Outlet></Outlet>                 
                </main>                
            </div>

        </>
    );
}

export default AuthLayout;