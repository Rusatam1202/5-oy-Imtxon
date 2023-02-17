import React from 'react'
import Search from '../../../assets/images/Searchimg.png'
import { HomeFromWerapper,HomeFromWerapperForm,HomeFromWerapperTitle,HomeFromLider,HomeFromInput,HomeFromButton } from './HomeFormStyled'

function HomeForm() {

const hendleSubmit = (evt)=>{
  evt.preventDefault();
  fetch('http://localhost:5000/author/genreId/1', {
    method: 'GET',
    // headers: {
    //     Authorization: localData
    // }
    
})
    .then((res) => res.json())
    .then((data) =>{
      if(data){
        data.map((item)=>console.log(item.image))
      }
    })
    .catch((err) => console.log(err))
}







  return (
    <HomeFromWerapper>
     <HomeFromWerapperForm>
     <HomeFromWerapperTitle>Qidirish</HomeFromWerapperTitle>
      <HomeFromLider  onSubmit={hendleSubmit}>
        <HomeFromInput type="text" placeholder='Adiblar, kitoblar, audiolar, maqolalar...' />
        <HomeFromButton type='submit'> <img src={Search} width='19' height='19' alt='Search img' />Izlash</HomeFromButton>
      </HomeFromLider>
     </HomeFromWerapperForm>

    </HomeFromWerapper>
  )
}

export default HomeForm
