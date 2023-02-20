import React from 'react'
import { Home } from '../Home/Home'
import {HomeWrapper} from "./BookPageStyled"
import { HomeHeaders } from '../Home/HomeHeader/HomeHeader' 
import Hero from '../../components/Hero/Hero'
// import HomeForm from '../Home/HomeForm/HomeForm'
import Kategory from './Kategory/Kategory'


function BookPage() {
  return (
   <HomeWrapper>
   <HomeHeaders/>
      <Hero/>
      {/* <HomeForm/> */}
      <Kategory/>
      
   </HomeWrapper>
  )
}

export default BookPage