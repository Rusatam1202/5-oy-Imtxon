import React, { useEffect, useState } from 'react'
import { HomeHeaders } from '../Home/HomeHeader/HomeHeader'
import imgprofl from '../../assets/images/bekentImg/Rectangle 3.jpg'
import imgproflSmoll from '../../assets/images/bekentImg/image 2.png'
import { BooksSingleWrapper, BooksSingleWrapperAuthor, BooksSingleSmollContent, BooksSingleText, BooksSingleTitle, BooksSingleContent2, BooksSingleSmollText, BooksSingleSmollTitle, BooksSingleSmollspan, BooksSingleWrapperContent, BooksSingleWrapperTop, BooksSingleBooksWrapper, BooksSingleBooksWrapperTitle, BooksSingleBooksWrapperStrong, BooksSingleBooksList, BooksSingleBooksItem, BooksSingleBooksImgs, BooksSingleBooksTitle, BooksSingleBooksText } from './AuthorSinglePageStyled'
import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios'



function AuthorSinglePage() {
  const { id } = useParams()
  console.log(id.at(0));
  const [card, setCard] = useState([])
  const [cards, setCards] = useState([])
  const GetAuthor = async () => {
    const data = await axios.get('http://localhost:5000/author/authorId/' + id, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }
    )
    console.log(data);
    if (data.status === 201) {
      setCard(data.data)
      console.log(data);
    }
  }
  // ==================================
  const GetAuthors = async () => {
    const data = await axios.get('http://localhost:5000/author/genreId/' + id.at(0), {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }
    )
    console.log(data);
    if (data.status === 201) {
      setCards(data.data)
      console.log(data.data);
    }
  }


  useEffect(() => {
    GetAuthor()
    GetAuthors()
  }, [id]);
  console.log(card);
  return (
    <>
      <HomeHeaders />
      <BooksSingleWrapper>
        {


        }
        <BooksSingleWrapperContent>
          <BooksSingleWrapperAuthor src={'http://localhost:5000/' + card.image} width='505' height='681' alt="Imgauthor" />
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
          {
            cards.map((el) => (
              <>
                
          <BooksSingleBooksItem>
           <NavLink to={'/AuthorSinglePage'+el.id}>
           <BooksSingleBooksImgs src={'http://localhost:5000/'+ el.image} width='190' height={283} alt="bookCards" />
            <BooksSingleBooksTitle>{el.first_name  }  { el.last_name}</BooksSingleBooksTitle>
            <BooksSingleBooksText>{el.date_of_birth}</BooksSingleBooksText>
            <BooksSingleBooksText>{el.country}</BooksSingleBooksText>
           </NavLink>
          </BooksSingleBooksItem>
              </>
            ))
          }



        </BooksSingleBooksList>
      </BooksSingleWrapper>

    </>

  )
}

export default AuthorSinglePage