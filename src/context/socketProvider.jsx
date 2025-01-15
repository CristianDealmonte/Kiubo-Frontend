import { Children, createContext, useEffect, useState } from "react";
import io from 'socket.io-client';


import useAuth from "../hooks/useAuth";

const SocketContext = createContext();

export const  SocketProvider = ({ children }) => {

    const [socket, setSocket ] = useState(null);
    const [onLineUsers, setOnLineUsers] = useState([]);
    const { auth } = useAuth();

    useEffect( () => {
        if(auth?._id) {
            const socket = io(import.meta.env.VITE_BACKEND_URL, {
                query: {
                    userId: auth._id,
                }
            })

            setSocket(socket);


            socket.on("getOnlineUsers", (users) => {
                setOnLineUsers(users); 
            })




            return () => socket.close();
        } else {
            if(socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [auth]);


    return (
        <SocketContext.Provider
            value={{
                socket, 
                onLineUsers
            }}
        >
            {children}
        </SocketContext.Provider>
    )
}

export default SocketContext