import React, { useEffect, useRef } from 'react'
import {
    HomeWrapper,  
    HomeHeader,
    HomeHeaderTitle,
    HomeDropDown,
    HomeDropDownLink,
    HomeHeaderNavWrapper,
    HomeDropDownlogo,
    HomeHeaderNavLink,
    HomeHeaderNavLinkGlavni
  } from './HomeHeaderStyled'
  import { useState } from 'react'
  import ProfillImg from "../../../assets/images/bekentImg/ProfillImg.jpg"
import vector from "../../../assets/images/Vector1.svg"
import { Link, Routes,Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { AddAuthor } from '../../AddAuthor/AddAuthor'
import styled from 'styled-components'
import axios from 'axios'




export const HomeHeaders=()=>{
const localData = localStorage.getItem('token')

  const opContainer = useRef()
  const opArrowDown = useRef()
  const [open, setOpen] = useState(false)
const hendleLogoute = ()=>{
localStorage.removeItem('token')
window.location.reload('/')

}
const [profil,setProfil]=useState([])

        const GetProfile =async()=>{
       const data = await axios.get('http://localhost:5000/user/me',{
                 headers: {
                    Authorization: localData
                }
             })
            console.log(data);
            if(data.status === 201){
                console.log(data.data);
                setProfil(data.data)
            }
        }
console.log(profil);

        useEffect(()=>{
            // hendleSubmit()
            GetProfile()
        },[])



  return (
    
  <HomeWrapper>
    <HomeHeader>

        <HomeHeaderTitle>Badiiyat</HomeHeaderTitle>
        <HomeHeaderNavWrapper>
          <HomeHeaderNavLinkGlavni  to={'/'}>
            Bosh sahifa

          </HomeHeaderNavLinkGlavni>
          <HomeHeaderNavLinkGlavni  to={'/BookPage'}>

            Kitoblar
          </HomeHeaderNavLinkGlavni>

          <HomeDropDown ref={opContainer} onClick={() => { setOpen(!open) }}>
            <HomeDropDownlogo src={'http://localhost:5000/' + profil.image} width='50' height=' 50' alt="Avatar" />
            <img src={vector} width='11' height='6' alt='vector' />
          </HomeDropDown>

          <HomeDropDownLink ref={opArrowDown} className={`csfd ${open ? 'active' : 'inactive'}`}>
            <HomeHeaderNavLink to={'/ProfilHeader'}>Profile</HomeHeaderNavLink>
            <HomeHeaderNavLink to={'/AddAuthor'}>Add author</HomeHeaderNavLink>
            <HomeHeaderNavLink to={'/AddBook'}>Add book</HomeHeaderNavLink>
            <HomeHeaderNavLink onClick={hendleLogoute} to={'/'}>Log out</HomeHeaderNavLink>
            
            <Routes>
              <Route path='/AddAuthor' element={<AddAuthor/>}/>
            </Routes>

          </HomeDropDownLink>
        </HomeHeaderNavWrapper>
      </HomeHeader>
  </HomeWrapper>


   
  )
}

