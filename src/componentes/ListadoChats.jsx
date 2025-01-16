
import useUsuarios from '../hooks/useUsuarios';


import ChatUsuario from './ChatUsuario';

const ListadoChats = (  ) => {
    const { loading, usuarios } = useUsuarios();


    return (
        <>
            {
                usuarios.map( usuario => (
                    <ChatUsuario
                        key={usuario._id}
                        usuario={usuario}
                    />
                ))
                
            }

        </>
    )
}

export default ListadoChats;