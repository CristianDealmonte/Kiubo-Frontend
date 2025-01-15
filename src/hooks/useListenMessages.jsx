import useSocket from './useSocket';
import useMensajes from './useMensajes';
import { useEffect } from 'react';

const useListenMessages = () => {

    const { socket } = useSocket();
    const { mensajes, setMensajes } = useMensajes();

    useEffect( () => {
        socket?.on('newMessage', (newMessage) => {
            setMensajes([...mensajes, newMessage]);
        });

        return () => socket?.off('newMessage');
    }, [socket, setMensajes, mensajes]);
}

export default useListenMessages;