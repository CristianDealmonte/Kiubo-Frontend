// Importaciones de dependencias
import { useEffect } from "react";
import { useParams } from "react-router-dom";

// Importaciones de 
import useUsuarios from "../hooks/useUsuarios";

const ChatInfo = (  ) => {

    const { chatActivo } = useUsuarios();

    const params = useParams();
    const {id} = params;






    return (
        <>
            <button type="button" className="lg:hidden">
                <i className="bx bx-arrow-back text-2xl text-white"></i>
            </button>

            <div className="flex-1 flex gap-5">
                <img className="w-12 h-12 rounded-full bg-color4" src="" alt="" />
                <div>
                    <h2 className="text-white text-xl ">{chatActivo.username}</h2>
                    <p className="text-white text-sm">Conectado</p>
                </div>
            </div>

            <div >
                <i className="bx bx-cog text-2xl text-white"></i>
            </div>
        </>
    )
}

export default ChatInfo;