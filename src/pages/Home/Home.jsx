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
      {/* <HomeForm/> */}
      <Kategory/>
   


    </HomeWrapper>
  )
  
//   axios.get('http://localhost:5000/author/genreId/1', {
//     headers: {
//         Authorization: localData
//     },
// })
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))

}
