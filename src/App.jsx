import { Routes, Route } from 'react-router-dom';

import Register from "./pages/Register/Register"
import Logn from "./pages/Logn/Logn"
import { Home } from './pages/Home/Home';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from './redux/token/tokenAction';
import { GlobalStyled } from './GloballStyled';
import { AddAuthor } from './pages/AddAuthor/AddAuthor';
import AddBook from './pages/AddBook/AddBook';
import BookPage from './pages/BookPage/BookPage';
import Profile from './pages/Profile/Profile';
import AuthorSinglePage from './pages/AuthorSinglePage/AuthorSinglePage';
import BooksSinglePage from './pages/BooksSinglePage/BooksSinglePage';
import { HomeHeaders } from './pages/Home/HomeHeader/HomeHeader'; 
import Kategory from './pages/BookPage/Kategory/Kategory';
import Security from './pages/Profile/Security/Security';
import ProfliePage from './pages/Profile/ProfilePage/ProfliePage';
import Settings from './pages/Profile/Settings/Settings';



function App() {

  const token = useSelector((state) => state.token.token)
  console.log(token);
  const dispatch = useDispatch()

  dispatch(setToken(localStorage.getItem('token')) || '')
  //  dispatch(setUser(JSON.parse(localStorage.getItem('user'))) || '')

  if (token) {
    return (
      <>
{/* <HomeHeaders/> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/AddAuthor' element={<AddAuthor />} />
          <Route path='/AddBook' element={<AddBook/>}/>
          <Route path='/BookPage' element={<BookPage/>}/>
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/AuthorSinglePage:id' element={<AuthorSinglePage/>}/>
          <Route path='/BooksSinglePage:id' element={<BooksSinglePage/>}/>
          <Route path='/Kategory' element={<Kategory/>}/>
          <Route path='/ProfliePage' element={<ProfliePage/>}/>
          <Route path='/Security' element={<Security/>}/>
          <Route path='/Settings' element={<Settings/>}/>
        </Routes>
        {/* <Hero/> */}
        <GlobalStyled />
      </>
    )
  }
  return (
    <>
      <Routes>
        <Route path='/' element={<Logn />} />
        <Route path='/Register' element={<Register />} />
        {/* <Route path='Home/*' element={<Home />}>
          <Route path='AddAuthor' element={<AddAuthor />} />
        </Route> */}
       
      </Routes>
      <GlobalStyled />
    </>
  )





}

export default App
