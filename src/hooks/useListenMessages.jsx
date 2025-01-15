import { useParams } from 'react-router-dom';

import useSocket from './useSocket';
import useMensajes from './useMensajes';
import { useEffect } from 'react';

const useListenMessages = () => {

    const { socket } = useSocket();
    const { mensajes, setMensajes } = useMensajes();

    const { id } = useParams();
    const emisor = id; 

    useEffect( () => {

        socket?.on('newMessage', (newMessage) => {
            if(newMessage.emisor == emisor) {
                setMensajes([...mensajes, newMessage]);
            }
        });

        return () => socket?.off('newMessage');
    }, [socket, setMensajes, mensajes]);
}
export default useListenMessages;