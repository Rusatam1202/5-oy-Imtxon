import React, { useRef } from 'react'
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
  import Avatar from "../../../assets/images/1077114.png"
import vector from "../../../assets/images/Vector1.svg"
import { Link, Routes,Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { AddAuthor } from '../../AddAuthor/AddAuthor'
import styled from 'styled-components'




export const HomeHeaders=()=>{
  const opContainer = useRef()
  const opArrowDown = useRef()
  const [open, setOpen] = useState(false)
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
            <HomeDropDownlogo src={Avatar} width='50' height=' 50' alt="Avatar" />
            <img src={vector} width='11' height='6' alt='vector' />
          </HomeDropDown>

          <HomeDropDownLink ref={opArrowDown} className={`csfd ${open ? 'active' : 'inactive'}`}>
            <HomeHeaderNavLink to={'/Profile'}>Profile</HomeHeaderNavLink>
            <HomeHeaderNavLink to={'/AddAuthor'}>Add author</HomeHeaderNavLink>
            <HomeHeaderNavLink to={'/AddBook'}>Add book</HomeHeaderNavLink>
            <HomeHeaderNavLink to={'/'}>Log out</HomeHeaderNavLink>
            <Routes>
              <Route path='/AddAuthor' element={<AddAuthor/>}/>
            </Routes>

          </HomeDropDownLink>
        </HomeHeaderNavWrapper>
      </HomeHeader>
  </HomeWrapper>


   
  )
}

