// Importacion de dependencias



// Importacion de custom modules
import useAuth from "../../hooks/useAuth";


const Profile = () => {
    
    const { auth, cargando, cerrarSesion } = useAuth();


    return(
        <>


            <main className="container w-3/5 text-white mx-auto p-3">

            <div className=" bg-color4 h-52">
                 <h2>Este es el perfil</h2>
            </div>

            
            {/* <button
                        type="button"
                        onClick={cerrarSesion}
                    >
                        <i className='bx bx-log-out-circle text-color3 text-3xl' ></i>
                    </button> */}



                       
            </main>
        </>
    )
}

export default Profile;