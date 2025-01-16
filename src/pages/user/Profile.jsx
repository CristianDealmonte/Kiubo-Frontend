// Importacion de dependencias



// Importacion de custom modules
import useAuth from "../../hooks/useAuth";


const Profile = () => {
    
    const { auth, cargando, cerrarSesion } = useAuth();

    const banner = `${import.meta.env.VITE_BACKEND_URL}/public/${auth.bannerImg}`;


    return(
        <>

 
            <main className="container lg:w-3/5 text-white mx-auto p-3">

                <div >
                    <img className={` h-40 lg:h-52 w-full object-cover rounded-xl`} src={`${import.meta.env.VITE_BACKEND_URL}/public/${auth.bannerImg}`} alt="Imagen Banner" />
                </div>

                <section className="my-10 flex flex-col gap-5">
                    <div className="border-b border-color4 p-4 -my-36">
                        <div >
                            <img className="bg-color4 w-32 h-32 lg:w-40 lg:h-40 rounded-full border-8 border-color1" src={`${import.meta.env.VITE_BACKEND_URL}/public/${auth.profilePicture}`} alt="Imagen del Perfil" />
                        </div>
                        <div className="flex justify-between items-center mt-5" >
                            <div>
                                <h2 className="text-4xl lg:text-6xl font-bold">{auth.username}</h2>
                            </div>
                            <div>
                                <button 
                                onClick={cerrarSesion}
                                    className="border-2 border-color4 text-color4 py-2 px-8 rounded-lg hover:bg-color4 hover:text-white"
                                >Cerrar Sesión</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/20 px-5 py-8 rounded-lg mt-36">
                        <h2 className="text-xl text-white font-bold">Sobre Mi</h2>
                        {auth.descripcion}
                    </div>

                    <div>

                    </div>
                </section>

                       
            </main>
        </>
    )
}

export default Profile;