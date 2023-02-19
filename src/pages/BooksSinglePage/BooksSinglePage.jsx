import React, { useState } from 'react'
import { HomeHeaders } from '../Home/HomeHeader/HomeHeader'
import imgproflBook from '../../assets/images/bekentImg/SingleBookImg.png'
import imgproflSmoll from '../../assets/images/bekentImg/image 2.png'
import { BooksSingleWrapper, BooksSingleWrapperAuthor, BooksSingleSmollContent, BooksSingleText, BooksSingleTitle, BooksSingleContent2, BooksSingleSmollText, BooksSingleSmollTitle, BooksSingleSmollspan, BooksSingleWrapperContent, BooksSingleWrapperTop, BooksSingleBooksWrapper, BooksSingleBooksWrapperTitle, BooksSingleBooksWrapperStrong, BooksSingleBooksList, BooksSingleBooksItem, BooksSingleBooksImgs, BooksSingleBooksTitle, BooksSingleBooksText, DataWrapper, DataWrapperText, DataWrapperStrong, DataWrapperContent, DataWrapperContentText, DataWrapperContentImg, DataWrapperContentSpan } from './BooksSingleStyled'
import Vektor from '../../assets/images/bekentImg/Subtract.svg'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function BooksSinglePage() {

  const localData = localStorage.getItem('token')

const {id}=useParams()
console.log(id);

const [Cards,setCards]=useState([]);

const hendleSearch = async ()=>{

  const data = await axios.get('http://localhost:5000/book/search?book='+ id.slice(2),{
    headers: {
      Authorization: localData
  }
  } )
  console.log(data);
}


// useEffect(() => {
// hendleSearch()
  
// }, []);

  return (
    <div>

      <HomeHeaders />
      <BooksSingleWrapper>
        {/* ============================== */}
        <BooksSingleWrapperContent>
          <BooksSingleWrapperAuthor src={imgproflBook} width='505' height='681' alt="Imgauthor" />
          <BooksSingleWrapperTop>
            <BooksSingleTitle>Qo’rqma</BooksSingleTitle>
            <DataWrapper>
              <DataWrapperText>Sahifalar soni:</DataWrapperText>
              <DataWrapperStrong>376 page</DataWrapperStrong>
            </DataWrapper>
            <DataWrapper>
              <DataWrapperText>Chop etilgan:</DataWrapperText>
              <DataWrapperStrong>2021 years</DataWrapperStrong>
            </DataWrapper>
            <DataWrapper>
              <DataWrapperText>Kitob narxi:</DataWrapperText>
              <DataWrapperStrong>$124.9</DataWrapperStrong>
            </DataWrapper>
            <DataWrapperContent>
              <DataWrapperContentText>To’liq ma’lumot</DataWrapperContentText>
              <DataWrapperContentImg src={Vektor} width='7' height='18' alt='Vektor' />
              <DataWrapperContentSpan></DataWrapperContentSpan>
            </DataWrapperContent>

            <BooksSingleText>Oʻtkir Hoshimov 1941 yil Toshkent viloyatining Zangiota (hozirgi Chilonzor) tumanidagi Doʻmbiravot mavzeida tugʻildi. Oʻ. Hoshimov mehnat faoliyatini erta boshladi. Toshkent Davlat universiteti (hozirgi Oʻzbekiston Milliy universiteti)ning jurnalistika kulliyotida oʻqish bilan baravar gazeta tahririyatida ishladi. 1959 yildan 1963 yilgacha “Temiryoʻlchi”, “Qizil Oʻzbekiston”, “Transportniy rabochiy” gazetalarida xat tashuvchi, mussaxhih, tarjimon boʻlib ishladi. Soʻng “Toshkent haqiqati” gazetasida adabiy xodim (1963–1966), “Toshkent oqshomi” gazetasida boʻlim mudiri (1966–1982), Gʻ. Gʻulom nomidagi Adabiyot va sanʼat nashriyotida bosh muharrir oʻrinbosari (1982–1985) boʻldi. 1985–1995 yillarda “Sharq yulduzi” jurnaliga bosh muharrirlik qildi. 1995 yildan 2005 yilgacha Oʻzbekiston Respublikasi Oliy Majlisining Matbuot va axborot qoʻmitasi raisi lavozimida ishladi. 2005 yildan “Teatr“ jurnalida bosh muharrir boʻlib ishladi.</BooksSingleText>

          </BooksSingleWrapperTop>
        </BooksSingleWrapperContent>
        {/* ============================ */}
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
    </div>
  )
}

export default BooksSinglePage


