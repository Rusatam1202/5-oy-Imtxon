import { Routes,Route } from 'react-router-dom';

import Register from "./pages/Register/Register"
import Logn from "./pages/Logn/Logn"
import { Home } from './pages/Home/Home';
import { useDispatch,useSelector } from 'react-redux';
import { setToken } from './redux/token/tokenAction';
import { setUser } from './redux/users/userAction';
import { GlobalStyled } from './GloballStyled';

function App() {

  const token = useSelector((state)=>state.token.token)
  console.log(token);
const dispatch = useDispatch()

 dispatch(setToken(localStorage.getItem('token')) || '')
//  dispatch(setUser(JSON.parse(localStorage.getItem('user'))) || '')

  if(token){
    return(
   <>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <GlobalStyled/>
   </>
    )
  }
    return(
      <>
        <Routes>
          <Route path='/' element={<Logn/>}/>
          <Route path='/Register' element={<Register/>}/>
        </Routes>
        <GlobalStyled/>
      </>
      )
  

   
  

}

export default App
