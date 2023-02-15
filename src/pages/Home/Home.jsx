import { Dropdown } from 'bootstrap'
import React, { useRef } from 'react'
import Avatar from "../../assets/images/1077114.png"
import vector from "../../assets/images/Vector1.svg"
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
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
} from './HomeStyled'
import styled from 'styled-components'
import { useState } from 'react'
import Hero from '../../components/Hero/Hero'
import HomeForm from './HomeForm/HomeForm'

export const Home = () => {

  const opContainer = useRef()
  const opArrowDown = useRef()






  const [open, setOpen] = useState(false)



  return (
    <HomeWrapper>
      <HomeHeader>
        <HomeHeaderTitle>Badiiyat</HomeHeaderTitle>
        <HomeHeaderNavWrapper>
          <HomeHeaderNavLinkGlavni  to={'/books'}>
            Bosh sahifa

          </HomeHeaderNavLinkGlavni>
          <HomeHeaderNavLinkGlavni  to={'/'}>

            Kitoblar
          </HomeHeaderNavLinkGlavni>

          <HomeDropDown ref={opContainer} onClick={() => { setOpen(!open) }}>
            <HomeDropDownlogo src={Avatar} width='50' height=' 50' alt="Avatar" />
            <img src={vector} width='11' height='6' alt='vector' />
          </HomeDropDown>

          <HomeDropDownLink ref={opArrowDown} className={`csfd ${open ? 'active' : 'inactive'}`}>
            <HomeHeaderNavLink to={'/'}>Profile</HomeHeaderNavLink>
            <HomeHeaderNavLink to={'/'}>Add author</HomeHeaderNavLink>
            <HomeHeaderNavLink to={'/'}>Add book</HomeHeaderNavLink>
            <HomeHeaderNavLink to={'/'}>Log out</HomeHeaderNavLink>

          </HomeDropDownLink>
        </HomeHeaderNavWrapper>
      </HomeHeader>
      <Hero/>
      <HomeForm/>
    </HomeWrapper>
  )
}
