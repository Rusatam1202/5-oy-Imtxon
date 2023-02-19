import React, { useEffect, useState } from 'react'
import { HomeHeaders } from '../Home/HomeHeader/HomeHeader'
import imgproflBook from '../../assets/images/bekentImg/SingleBookImg.png'
import imgproflSmoll from '../../assets/images/bekentImg/image 2.png'
import { BooksSingleWrapper, BooksSingleWrapperAuthor, BooksSingleSmollContent, BooksSingleText, BooksSingleTitle, BooksSingleContent2, BooksSingleSmollText, BooksSingleSmollTitle, BooksSingleSmollspan, BooksSingleWrapperContent, BooksSingleWrapperTop, BooksSingleBooksWrapper, BooksSingleBooksWrapperTitle, BooksSingleBooksWrapperStrong, BooksSingleBooksList, BooksSingleBooksItem, BooksSingleBooksImgs, BooksSingleBooksTitle, BooksSingleBooksText, DataWrapper, DataWrapperText, DataWrapperStrong, DataWrapperContent, DataWrapperContentText, DataWrapperContentImg, DataWrapperContentSpan } from './BooksSingleStyled'
import Vektor from '../../assets/images/bekentImg/Subtract.svg'
import { useParams} from 'react-router-dom'
import axios from 'axios'


function BooksSinglePage() {
const {id}=useParams()
console.log(id.at(0));
const [card,setCard]=useState([])
const [cards,setCards]=useState([])
const GetBook = async ()=>{
  const data = await axios.get('http://192.168.37.86:5000/book/search?book='+ id.slice(1),{
    headers: {
      Authorization: localStorage.getItem('token')
  }
} 
)
console.log(data);
if(data.status === 201){
  setCard(data.data)
  
}
}
// ==========================
const GetBooks = async ()=>{
  const data = await axios.get('http://localhost:5000/book/genreId/'+ id.at(0),{
    headers: {
      Authorization: localStorage.getItem('token')
  }
} 
)
console.log(data);
if(data.status === 201){
  setCards(data.data)
  console.log(data.data);
}
}
useEffect(() => {
GetBook()
GetBooks()
},[id]);
console.log(card);
  return (
    <div>
      <HomeHeaders />
        {/* ============================== */}
      <BooksSingleWrapper>
        <BooksSingleWrapperContent>
        {
   card.map((el)=>(
<>
          <BooksSingleWrapperAuthor src={'http://192.168.37.86:5000/' + el.image} width='505' height='681' alt="Imgauthor" />
          <BooksSingleWrapperTop>
            <BooksSingleTitle>{el.title}</BooksSingleTitle>
            <DataWrapper>
              <DataWrapperText>Sahifalar soni:</DataWrapperText>
              <DataWrapperStrong>{el.page} page</DataWrapperStrong>
            </DataWrapper>
            <DataWrapper>
              <DataWrapperText>Chop etilgan:</DataWrapperText>
              <DataWrapperStrong>{el.year} years</DataWrapperStrong>
            </DataWrapper>
            <DataWrapper>
              <DataWrapperText>Kitob narxi:</DataWrapperText>
              <DataWrapperStrong>${el.price}</DataWrapperStrong>
            </DataWrapper>
            <DataWrapperContent>
              <DataWrapperContentText>To’liq ma’lumot</DataWrapperContentText>
              <DataWrapperContentImg src={Vektor} width='7' height='18' alt='Vektor' />
              <DataWrapperContentSpan></DataWrapperContentSpan>
            </DataWrapperContent>

            <BooksSingleText>{el.description
}</BooksSingleText>

          </BooksSingleWrapperTop>

          </>
   ))
  }
        </BooksSingleWrapperContent>
        {/* ============================ */}
        <BooksSingleBooksWrapper>
          <BooksSingleBooksWrapperTitle>Asarlari</BooksSingleBooksWrapperTitle>
          <BooksSingleBooksWrapperStrong>Barchasini ko’rish</BooksSingleBooksWrapperStrong>
        </BooksSingleBooksWrapper>
        <BooksSingleBooksList>
        {
          cards.map((element)=>(
            <>
           
          <BooksSingleBooksItem>
            <BooksSingleBooksImgs src={'http://192.168.37.86:5000/' + element.image} width='190' height={283} alt="bookCards" />
            <BooksSingleBooksTitle>{element.title}</BooksSingleBooksTitle>
            <BooksSingleBooksText>{element.year}</BooksSingleBooksText>
          </BooksSingleBooksItem>
            </>
          ))
        }
        

        </BooksSingleBooksList>
      </BooksSingleWrapper>
    </div>
  )
}

export default BooksSinglePage


