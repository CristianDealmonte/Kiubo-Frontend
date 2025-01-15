// Importacion de dependiencias
import { BrowserRouter, Routes, Route} from 'react-router-dom'


// Importacion de componentes

// Componentes de rutas publicas
import AuthLayout from './layout/AuthLayout'; // Layout principal
import Login from './pages/auth/Login';
import Registrar from './pages/auth/Registrar';
import ConfirmarCuenta from './pages/auth/ConfirmarCuenta';
import ResetPassword from './pages/auth/ResetPassword';
import NewPassword from './pages/auth/NewPassword';


// Componentes de rutas Protegidas por autenticación
import { AuthProvider } from './context/AuthProvider'; // estado global de autenticación
import { MensajesProvider } from './context/MensajesProvider'; // estado global de los mensajes
import { UsuariosProvider } from './context/UsuariosProvider'; // estado global de los usuarios
import { SocketProvider } from './context/socketProvider';

import UserLayout from './layout/UserLayout';
import Messages from './pages/user/Messages';
import Contacts from './pages/user/Contacts';
import Profile from './pages/user/Profile';



function App() {

 

  return (
    <>

    {/* Enrutador de la App */}
    <BrowserRouter> {/* Creacion de la navegacion de la app */}
      
      <AuthProvider> {/* Asigmacion de los estados globales */}
        <MensajesProvider>
          <UsuariosProvider>
            <SocketProvider>
              
              <Routes> 
                {/* Rutas Publicas */}
                <Route path="/" element={<AuthLayout/>}> {/* Layout principal */} 
                  <Route index element={<Login/>}/> {/* Componente default */}
                  <Route path='register' element={<Registrar/>}/>
                  <Route path='confirm/:token' element={<ConfirmarCuenta/>}/>
                  <Route path='reset-password' element={<ResetPassword/>}/>
                  <Route path='reset-password/:token' element={<NewPassword/>}/>
                </Route>

                {/* Rutas Protegidas por autenticación */}
                <Route>
                  <Route path="/user" element={<UserLayout/>}>
                    <Route index element={<Profile/>}></Route>
                    <Route path='inbox/' element={<Messages/>}></Route>
                    <Route path='inbox/:id' element={<Messages/>}></Route>
                    <Route path='contacts' element={<Contacts/>}></Route>
                    {/* <Route path='search' element={<Search/>}></Route> */}
                  </Route>
                </Route>
                
              </Routes>

            </SocketProvider>
          </UsuariosProvider>
        </MensajesProvider>
      </AuthProvider>

    </BrowserRouter>
      


    </>
  )
}

export default App





