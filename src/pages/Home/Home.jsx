import React, { useRef } from 'react'
import {
  HomeWrapper,
 
} from './HomeStyled'

import Hero from '../../components/Hero/Hero'
// import HomeForm from './HomeForm/HomeForm'
import Kategory from './Kategory/Kategory'
import {HomeHeaders} from './HomeHeader/HomeHeader/'

export const Home = () => {

  return (
    <HomeWrapper>
    <HomeHeaders/>
      <Hero/>
      {/* <HomeForm/> */},
      <Kategory/>
   


    </HomeWrapper>
  )
  


}
