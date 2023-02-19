import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { KategoryWrapper, KategorTitle, KategoryList, KategoryItem, KategoryButton,KategoryCardList,KategoryCardItem,KategoryCardP,KategoryCardNavLink } from './KategoryStyled'

function Kategory() {


    const [card,setCard]=useState([])
    

   const hendleOpen =()=>{
    fetch('http://10.10.3.124:5000/author/genreId/1', {

        method: 'GET',
    })
        .then((res) => res.json())
        .then((data) =>setCard(data))
        .catch((err) => console.log(err))
        console.log(card);
   }
   const hendleOpen2 =()=>{
    fetch('http://10.10.3.124:5000/author/genreId/2', {

        method: 'GET',
    })
        .then((res) => res.json())
        .then((data) =>setCard(data))
        .catch((err) => console.log(err))
        console.log(card);
   }
   const hendleOpen3 =()=>{
    fetch('http://10.10.3.124:5000/author/genreId/3', {

        method: 'GET',
    })
        .then((res) => res.json())
        .then((data) =>setCard(data))
        .catch((err) => console.log(err))
        console.log(card);
   }
   const hendleOpen4 =()=>{
    fetch('http://10.10.3.124:5000/author/genreId/4', {

        method: 'GET',
    })
        .then((res) => res.json())
        .then((data) =>setCard(data))
        .catch((err) => console.log(err))
        console.log(card);
       
   }




    return (
        <>
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
                    <KategoryCardNavLink to={'/AuthorSinglePage'}>
                    <img src={'http://10.10.3.124:5000/' + cards.image} width='250' height='300' alt='cards'/>
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
