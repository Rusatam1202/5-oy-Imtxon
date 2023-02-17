import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

import { KategoryWrapper, KategorTitle, KategoryList, KategoryItem, KategoryButton,KategoryCardList,KategoryCardItem,KategoryCardP,KategoryCardNavLink } from './KategoryStyled'

function Kategory() {


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

// const hendleOpen = async ()=>{
//     const data = await axios.get('http://localhost:5000/author/genreId/1');
//     setCard(data)
  
// };

// useEffect(()=>{
// hendleOpen
// },[])

    // if (data.status === 201) {
    //     localStorage.setItem('token', data.data.token),
    //         localStorage.setItem('user', JSON.stringify(data.data.user))
    //     dispatch(setToken(data.data.token))
    //     dispatch(setUser(data.data.user))
    //     navigate('/')
    // }
    // .then((res) => res.json())
    // .then((data) => {
    //     if (data) {
    //         data.map((item) => console.log(item.image))
    //     }
    // })
    // .catch((err) => console.log(err))

    // onClick={(evt)= setClick(evt.target.dataset.poetId)}
    // data-poet-id='2'>


    return (
        <>
            <KategoryWrapper>
                <KategorTitle>Asosiy kategoriyalar</KategorTitle>
                <KategoryList>
                    <KategoryItem>
                        <KategoryButton  onClick={hendleOpen} to={'/'}>
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
