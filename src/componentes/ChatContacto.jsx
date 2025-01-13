import useAuth from "../hooks/useAuth";

const Mensaje = ( ) => {



    return (
        <div className="flex items-center m-1 p-4 rounded-md hover:bg-white/10 cursor-pointer">
            <div className="flex-1 flex gap-5">
                <img className="w-10 h-10 rounded-full bg-color4" src="" alt="" />
                <div>
                    <h2 className="text-white text-lg ">Nombre Usuario</h2>
                    <p className="text-white text-left text-xs">ultimo mensaje</p>
                </div>
            </div>
        </div>
    )
}

export default Mensaje;