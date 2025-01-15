// Importacion de dependencias



// Importacion de custom modules
import useAuth from "../../hooks/useAuth";


const Profile = () => {
    
    const { auth, cargando, cerrarSesion } = useAuth();


    return(
        <>


            <main className="w-9/12 flex flex-col text-white">
            <button
                        type="button"
                        onClick={cerrarSesion}
                    >
                        <i className='bx bx-log-out-circle text-color3 text-3xl' ></i>
                    </button>
                        <h2>Este es el perfil</h2>
            </main>
        </>
    )
}

export default Profile;