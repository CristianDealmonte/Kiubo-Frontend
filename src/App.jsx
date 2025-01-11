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
import UserLayout from './layout/UserLayout';
import Messages from './pages/user/Messages';
import Search from './pages/user/Search';
import Profile from './pages/user/Profile';


//Componentes de rutas de pantallas de Front
import Configuracion from './pages/Configuracion';
import StaticChatList from './pages/StaticChatList';
import Contactos from './pages/Contactos';
import Solicitudes from './pages/Solicitudes';
import MisContactos from './pages/MisContactos';
import Perfil from './pages/Perfil';


function App() {

 

  return (
    <>

    {/* Enrutador de la App */}
    <BrowserRouter> {/* Creacion de la navegacion de la app */}
      <AuthProvider> {/* Asigmacion de los estados globales */}
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
                <Route index element={<Messages/>}></Route>
                <Route path='search' element={<Search/>}></Route>
                <Route path='profile' element={<Profile/>}></Route>
                {/* <Route path='search' element={<Search/>}></Route> */}
              </Route>

            </Route>

            {/*Rutas Navegacion de Pantallas del Front */}
            <Route path="/StaticChatlist" element={<StaticChatList />} /> 
            <Route path="/contactos" element={<Contactos />} />
            <Route path="/Solicitudes" element={<Solicitudes />}/>
            <Route path="/MisContactos" element={<MisContactos />}/>
            <Route path="/Perfil" element={<Perfil />}/>
            <Route path="/configuracion" element={<Configuracion />} />


            
          </Routes>
        </AuthProvider>
    </BrowserRouter>
      


    </>
  )
}

export default App





