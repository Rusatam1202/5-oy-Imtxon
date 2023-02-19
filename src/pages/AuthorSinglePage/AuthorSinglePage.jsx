import React, { useEffect, useState } from 'react'
import { HomeHeaders } from '../Home/HomeHeader/HomeHeader'
import imgprofl from '../../assets/images/bekentImg/Rectangle 3.jpg'
import imgproflSmoll from '../../assets/images/bekentImg/image 2.png'
import {BooksSingleWrapper,BooksSingleWrapperAuthor,BooksSingleSmollContent,BooksSingleText,BooksSingleTitle,BooksSingleContent2,BooksSingleSmollText,BooksSingleSmollTitle,BooksSingleSmollspan,BooksSingleWrapperContent,BooksSingleWrapperTop,BooksSingleBooksWrapper,BooksSingleBooksWrapperTitle,BooksSingleBooksWrapperStrong,BooksSingleBooksList,BooksSingleBooksItem,BooksSingleBooksImgs,BooksSingleBooksTitle,BooksSingleBooksText} from './AuthorSinglePageStyled'
import { useParams } from 'react-router-dom'
import axios from 'axios'



function AuthorSinglePage() {
  const {id}=useParams()
console.log(id.at(0));
const [card,setCard]=useState([])
const GetAuthor = async ()=>{
  const data = await axios.get('http://192.168.37.86:5000/author/authorId/'+ id,{
    headers: {
      Authorization: localStorage.getItem('token')
  }
} 
)
console.log(data);
if(data.status === 201){
  setCard(data.data)
  console.log(data);
}
}
useEffect(() => {
  GetAuthor()
},[id]);
console.log(card);
  return (
 <>
   <HomeHeaders/>
<BooksSingleWrapper>

  <BooksSingleWrapperContent>
    <BooksSingleWrapperAuthor src={'http://192.168.37.86:5000/' + card.image} width='505' height='681' alt="Imgauthor" />
    <BooksSingleWrapperTop>
      <BooksSingleTitle>{card.first_name}{card.last_name}</BooksSingleTitle>
      <BooksSingleText>{card.bio}</BooksSingleText>
      <BooksSingleContent2>
        <BooksSingleSmollContent>
        <BooksSingleSmollText>Tavallud sanasi</BooksSingleSmollText>
        <BooksSingleSmollTitle>{card.date_of_birth}</BooksSingleSmollTitle>
        <BooksSingleSmollText>Toshkent, Uzbekistan</BooksSingleSmollText>
        </BooksSingleSmollContent>
        <BooksSingleSmollspan></BooksSingleSmollspan>
        <BooksSingleSmollContent>
        <BooksSingleSmollText>Vafot etgan sana</BooksSingleSmollText>
        <BooksSingleSmollTitle>{card.date_of_death}</BooksSingleSmollTitle>
        <BooksSingleSmollText>Toshkent, Uzbekistan</BooksSingleSmollText>
        </BooksSingleSmollContent>
      </BooksSingleContent2>
    </BooksSingleWrapperTop>
  </BooksSingleWrapperContent>
  {/* ================================ */}
  <BooksSingleBooksWrapper>
    <BooksSingleBooksWrapperTitle>Asarlari</BooksSingleBooksWrapperTitle>
    <BooksSingleBooksWrapperStrong>Barchasini ko’rish</BooksSingleBooksWrapperStrong>
  </BooksSingleBooksWrapper>
  <BooksSingleBooksList>
    <BooksSingleBooksItem>
      <BooksSingleBooksImgs src={imgproflSmoll} width='190' height={283} alt="bookCards" />
      <BooksSingleBooksTitle>Dunyoning ishlari</BooksSingleBooksTitle>
      <BooksSingleBooksText>O’tkir Hoshimov</BooksSingleBooksText>
    </BooksSingleBooksItem>
    <BooksSingleBooksItem>
      <BooksSingleBooksImgs src={imgproflSmoll} width='190' height={283} alt="bookCards" />
      <BooksSingleBooksTitle>Dunyoning ishlari</BooksSingleBooksTitle>
      <BooksSingleBooksText>O’tkir Hoshimov</BooksSingleBooksText>
    </BooksSingleBooksItem>
    <BooksSingleBooksItem>
      <BooksSingleBooksImgs src={imgproflSmoll} width='190' height={283} alt="bookCards" />
      <BooksSingleBooksTitle>Dunyoning ishlari</BooksSingleBooksTitle>
      <BooksSingleBooksText>O’tkir Hoshimov</BooksSingleBooksText>
    </BooksSingleBooksItem>
    <BooksSingleBooksItem>
      <BooksSingleBooksImgs src={imgproflSmoll} width='190' height={283} alt="bookCards" />
      <BooksSingleBooksTitle>Dunyoning ishlari</BooksSingleBooksTitle>
      <BooksSingleBooksText>O’tkir Hoshimov</BooksSingleBooksText>
    </BooksSingleBooksItem>
    <BooksSingleBooksItem>
      <BooksSingleBooksImgs src={imgproflSmoll} width='190' height={283} alt="bookCards" />
      <BooksSingleBooksTitle>Dunyoning ishlari</BooksSingleBooksTitle>
      <BooksSingleBooksText>O’tkir Hoshimov</BooksSingleBooksText>
    </BooksSingleBooksItem>
    <BooksSingleBooksItem>
      <BooksSingleBooksImgs src={imgproflSmoll} width='190' height={283} alt="bookCards" />
      <BooksSingleBooksTitle>Dunyoning ishlari</BooksSingleBooksTitle>
      <BooksSingleBooksText>O’tkir Hoshimov</BooksSingleBooksText>
    </BooksSingleBooksItem>
    <BooksSingleBooksItem>
      <BooksSingleBooksImgs src={imgproflSmoll} width='190' height={283} alt="bookCards" />
      <BooksSingleBooksTitle>Dunyoning ishlari</BooksSingleBooksTitle>
      <BooksSingleBooksText>O’tkir Hoshimov</BooksSingleBooksText>
    </BooksSingleBooksItem>
    <BooksSingleBooksItem>
      <BooksSingleBooksImgs src={imgproflSmoll} width='190' height={283} alt="bookCards" />
      <BooksSingleBooksTitle>Dunyoning ishlari</BooksSingleBooksTitle>
      <BooksSingleBooksText>O’tkir Hoshimov</BooksSingleBooksText>
    </BooksSingleBooksItem>
    
  
  </BooksSingleBooksList>
</BooksSingleWrapper>

 </>

  )
}

export default AuthorSinglePage