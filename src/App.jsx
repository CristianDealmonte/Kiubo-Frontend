// Importacion de dependiencias
import { BrowserRouter, Routes, Route} from 'react-router-dom'



// Importacion de componentes
import AuthLayout from './layout/AuthLayout';
import Login from './pages/Login';
import Registrar from './pages/Registrar';
import ResetPassword from './pages/ResetPassword';
import ConfirmarCuenta from './pages/ConfirmarCuenta';
import NewPassword from './pages/NewPassword';



function App() {



  return (
    <>

    {/* Enrutador de la App */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout/>}> {/* Layout principal */} 
          <Route index element={<Login/>}/> {/* Componente default */}
          <Route path='registrar' element={<Registrar/>}/>
          <Route path='confirm/:token' element={<ConfirmarCuenta/>}/>
          <Route path='reset-password' element={<ResetPassword/>}/>
          <Route path='reset-password/:token' element={<NewPassword/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
      


    </>
  )
}

export default App





