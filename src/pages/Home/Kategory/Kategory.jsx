
import React, { useState } from 'react'
import Search from '../../../assets/images/Searchimg.png'
import { HomeFromWerapper,HomeFromWerapperForm,HomeFromWerapperTitle,HomeFromLider,HomeFromInput,HomeFromButton } from './HomeFormStyled'

// function HomeForm() {

// const hendleSubmit = (evt)=>{
//   evt.preventDefault();
//   fetch('http://localhost:5000/author/genreId/1', {
//     method: 'GET',
// })
//     .then((res) => res.json())
//     .then((data) =>{
//       if(data){
//         data.map((item)=>console.log(item))
//       }
//     })
//     .catch((err) => console.log(err))
// }
//   return (
    // <HomeFromWerapper>
    //  <HomeFromWerapperForm>
    //  <HomeFromWerapperTitle>Qidirish</HomeFromWerapperTitle>
    //   <HomeFromLider  onSubmit={hendleSubmit}>
    //     <HomeFromInput type="text" placeholder='Adiblar, kitoblar, audiolar, maqolalar...' />
    //     <HomeFromButton type='submit'> <img src={Search} width='19' height='19' alt='Search img' />Izlash</HomeFromButton>
    //   </HomeFromLider>
    //  </HomeFromWerapperForm>

    // </HomeFromWerapper>
//   )
// }

// export default HomeForm







// ================================================

import axios from 'axios';

import styled from 'styled-components';

import { KategoryWrapper, KategorTitle, KategoryList, KategoryItem, KategoryButton,KategoryCardList,KategoryCardItem,KategoryCardP,KategoryCardNavLink } from './KategoryStyled'

function Kategory() {


    const hendleSubmit = (evt)=>{
        evt.preventDefault();
        fetch('http://localhost:5000/author/genreId/1', {
          method: 'GET',
      })
          .then((res) => res.json())
          .then((data) =>{
            if(data){
              data.map((item)=>console.log(item))
            }
          })
          .catch((err) => console.log(err))
      }


// =======================================
    const [card,setCard]=useState([])
    

   const hendleOpen =()=>{
    fetch('http://localhost:5000/author/genreId/1', {

        method: 'GET',
    })
        .then((res) => res.json())
        .then((data) =>setCard(data))
        .catch((err) => console.log(err))
        console.log(card);
   }
   const hendleOpen2 =()=>{
    fetch('http://localhost:5000/author/genreId/2', {

        method: 'GET',
    })
        .then((res) => res.json())
        .then((data) =>setCard(data))
        .catch((err) => console.log(err))
        console.log(card);
   }
   const hendleOpen3 =()=>{
    fetch('http://localhost:5000/author/genreId/3', {

        method: 'GET',
    })
        .then((res) => res.json())
        .then((data) =>setCard(data))
        .catch((err) => console.log(err))
        console.log(card);
   }
   const hendleOpen4 =()=>{
    fetch('http://localhost:5000/author/genreId/4', {

        method: 'GET',
    })
        .then((res) => res.json())
        .then((data) =>setCard(data))
        .catch((err) => console.log(err))
        console.log(card);
       
   }




    return (
        <>
          <HomeFromWerapper>
     <HomeFromWerapperForm>
     <HomeFromWerapperTitle>Qidirish</HomeFromWerapperTitle>
      <HomeFromLider  onSubmit={hendleSubmit}>
        <HomeFromInput type="text" placeholder='Adiblar, kitoblar, audiolar, maqolalar...' />
        <HomeFromButton type='submit'> <img src={Search} width='19' height='19' alt='Search img' />Izlash</HomeFromButton>
      </HomeFromLider>
     </HomeFromWerapperForm>

    </HomeFromWerapper>
        {/* ============================== */}
            <KategoryWrapper>
                <KategorTitle>Asosiy kategoriyalar</KategorTitle>
                <KategoryList>
                    <KategoryItem>
                        <KategoryButton  onClick={hendleOpen}  to={'/'}>
                            Temuriylar davri
                        </KategoryButton>
                    </KategoryItem>
                    <KategoryItem>
                        <KategoryButton index onClick={hendleOpen2} to={'/'}>
                            Jadid adabiyoti
                        </KategoryButton>
                    </KategoryItem>
                    <KategoryItem>
                        <KategoryButton onClick={hendleOpen3} to={'/'}>
                            Sovet davri
                        </KategoryButton>
                    </KategoryItem>
                    <KategoryItem>
                        <KategoryButton onClick={hendleOpen4} to={'/'}>
                            Mustaqilk davri
                        </KategoryButton>
                    </KategoryItem>
                </KategoryList>



            </KategoryWrapper>
            <KategoryCardList>
               {
                card.map((cards)=>(
                    <KategoryCardItem>
                    <KategoryCardNavLink to={'/AuthorSinglePage'+cards.id}>
                    <img src={'http://localhost:5000/' + cards.image} width='250' height='300' alt='cards'/>
                    <KategoryCardP>{cards.first_name}</KategoryCardP>
                    <KategoryCardP>{cards.last_name}</KategoryCardP>
                    <KategoryCardP>{cards.date_of_birth}</KategoryCardP>
                    </KategoryCardNavLink>
                  
                    </KategoryCardItem>
                ))
               }
            </KategoryCardList>
        </>
    )
}

export default Kategory
