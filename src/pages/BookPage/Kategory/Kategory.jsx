import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { KategoryWrapper, KategorTitle, KategoryList, KategoryItem, KategoryButton,KategoryCardList,KategoryCardItem,KategoryCardP } from './KategoryStyled'

function Kategory() {


    const [card,setCard]=useState([])

   const hendleOpen =()=>{
    fetch('http://localhost:5000/author/genreId/3', {
        method: 'GET',
        // headers: {
        //     Authorization: localData
        // }
        
    })
        .then((res) => res.json())
        .then((data) =>setCard(data))
        .catch((err) => console.log(err))
        console.log(card);
   }



    




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




    return (
        <>
            <KategoryWrapper>
                <KategorTitle>Asosiy kategoriyalar</KategorTitle>
                <KategoryList>
                    <KategoryItem>
                        <KategoryButton  onClick={hendleOpen}>
                            Temuriylar davri
                        </KategoryButton>
                    </KategoryItem>
                    <KategoryItem>
                        <KategoryButton>
                            Jadid adabiyoti
                        </KategoryButton>
                    </KategoryItem>
                    <KategoryItem>
                        <KategoryButton>
                            Sovet davri
                        </KategoryButton>
                    </KategoryItem>
                    <KategoryItem>
                        <KategoryButton>
                            MustaqilKategoryItemk davri
                        </KategoryButton>
                    </KategoryItem>
                </KategoryList>



            </KategoryWrapper>
            <KategoryCardList>
               {
                card.map((cards)=>(
                    <KategoryCardItem>
                    <img src={'http://localhost:5000/' + cards.image} width='250' height='300' alt='cards'/>
                    <KategoryCardP>{cards.id}</KategoryCardP>
                    <KategoryCardP>{cards.first_name}</KategoryCardP>
                    </KategoryCardItem>
                ))
               }
            </KategoryCardList>
        </>
    )
}

export default Kategory
