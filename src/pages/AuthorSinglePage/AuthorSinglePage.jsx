import React from 'react'
import { HomeHeaders } from '../Home/HomeHeader/HomeHeader'
import imgprofl from '../../assets/images/bekentImg/Rectangle 3.jpg'
import imgproflSmoll from '../../assets/images/bekentImg/image 2.png'
import {BooksSingleWrapper,BooksSingleWrapperAuthor,BooksSingleSmollContent,BooksSingleText,BooksSingleTitle,BooksSingleContent2,BooksSingleSmollText,BooksSingleSmollTitle,BooksSingleSmollspan,BooksSingleWrapperContent,BooksSingleWrapperTop,BooksSingleBooksWrapper,BooksSingleBooksWrapperTitle,BooksSingleBooksWrapperStrong,BooksSingleBooksList,BooksSingleBooksItem,BooksSingleBooksImgs,BooksSingleBooksTitle,BooksSingleBooksText} from './AuthorSinglePageStyled'

function AuthorSinglePage() {
  return (
 <>
   <HomeHeaders/>
<BooksSingleWrapper>
  <BooksSingleWrapperContent>
    <BooksSingleWrapperAuthor src={imgprofl} width='505' height='681' alt="Imgauthor" />
    <BooksSingleWrapperTop>
      <BooksSingleTitle>O’tkir Hoshimov</BooksSingleTitle>
      <BooksSingleText>Oʻtkir Hoshimov 1941 yil Toshkent viloyatining Zangiota (hozirgi Chilonzor) tumanidagi Doʻmbiravot mavzeida tugʻildi. Oʻ. Hoshimov mehnat faoliyatini erta boshladi. Toshkent Davlat universiteti (hozirgi Oʻzbekiston Milliy universiteti)ning jurnalistika kulliyotida oʻqish bilan baravar gazeta tahririyatida ishladi. 1959 yildan 1963 yilgacha “Temiryoʻlchi”, “Qizil Oʻzbekiston”, “Transportniy rabochiy” gazetalarida xat tashuvchi, mussaxhih, tarjimon boʻlib ishladi. Soʻng “Toshkent haqiqati” gazetasida adabiy xodim (1963–1966), “Toshkent oqshomi” gazetasida boʻlim mudiri (1966–1982), Gʻ. Gʻulom nomidagi Adabiyot va sanʼat nashriyotida bosh muharrir oʻrinbosari (1982–1985) boʻldi. 1985–1995 yillarda “Sharq yulduzi” jurnaliga bosh muharrirlik qildi. 1995 yildan 2005 yilgacha Oʻzbekiston Respublikasi Oliy Majlisining Matbuot va axborot qoʻmitasi raisi lavozimida ishladi. 2005 yildan “Teatr“ jurnalida bosh muharrir boʻlib ishladi.</BooksSingleText>
      <BooksSingleContent2>
        <BooksSingleSmollContent>
        <BooksSingleSmollText>Tavallud sanasi</BooksSingleSmollText>
        <BooksSingleSmollTitle>1941</BooksSingleSmollTitle>
        <BooksSingleSmollText>Toshkent, Uzbekistan</BooksSingleSmollText>
        </BooksSingleSmollContent>
        <BooksSingleSmollspan></BooksSingleSmollspan>
        <BooksSingleSmollContent>
        <BooksSingleSmollText>Vafot etgan sana</BooksSingleSmollText>
        <BooksSingleSmollTitle>2013</BooksSingleSmollTitle>
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