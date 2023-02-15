import React from 'react'
import Search from '../../../assets/images/Searchimg.png'
import { HomeFromWerapper,HomeFromWerapperForm,HomeFromWerapperTitle,HomeFromLider,HomeFromInput,HomeFromButton } from './HomeFormStyled'

function HomeForm() {
  return (
    <HomeFromWerapper>
     <HomeFromWerapperForm>
     <HomeFromWerapperTitle>Qidirish</HomeFromWerapperTitle>
      <HomeFromLider>
        <HomeFromInput type="text" placeholder='Adiblar, kitoblar, audiolar, maqolalar...' />
        <HomeFromButton type='button'> <img src={Search} width='19' height='19' alt='Search img' />Izlash</HomeFromButton>
      </HomeFromLider>
     </HomeFromWerapperForm>

    </HomeFromWerapper>
  )
}

export default HomeForm
