import axios from 'axios';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


import { KategoryWrapper, KategorTitle, KategoryList, KategoryItem, KategoryButton, KategoryCardList, KategoryCardItem, KategoryCardP,KategoryCardNavLink } from './KategoryStyled'

function Kategory() {

    const localData = localStorage.getItem('token')
    const [card, setCard] = useState([])

    const hendleOpen = () => {
        fetch('http://192.168.37.86:5000/book/genreId/1', {

            method: 'GET',
            headers: {
                Authorization: localData
            },

        })
            .then((res) => res.json())
            .then((data) => setCard(data))
            .catch((err) => console.log(err))
        console.log(card);
    }
    const hendleOpen2 = () => {
        fetch('http://192.168.37.86:5000/book/genreId/2', {

            method: 'GET',
            headers: {
                Authorization: localData
            },

        })
            .then((res) => res.json())
            .then((data) => setCard(data))
            .catch((err) => console.log(err))
        console.log(card);
    }
    const hendleOpen3 = async () => {
        await fetch('http://192.168.37.86:5000/book/genreId/3', {

            method: 'GET',
            headers: {
                Authorization: localData
            },

        })
            .then((res) => res.json())
            .then((data) => setCard(data))
            .catch((err) => console.log(err))
        console.log(card);
    }
    const hendleOpen4 = async () => {
        await fetch('http://192.168.37.86:5000/book/genreId/4', {

            method: 'GET',
            headers: {
                Authorization: localData
            },

        })
            .then((res) => res.json())
            .then((data) => setCard(data))
            .catch((err) => console.log(err))
        console.log(card);
    }


    return (
        <>
            <KategoryWrapper>
                <KategorTitle>Asosiy kategoriyalar</KategorTitle>
                <KategoryList>
                    <KategoryItem>
                        <KategoryButton onClick={hendleOpen}>
                            Temuriylar davri
                        </KategoryButton>
                    </KategoryItem>
                    <KategoryItem>
                        <NavLink onClick={hendleOpen2} to={''}>
                            Jadid adabiyoti
                        </NavLink>
                    </KategoryItem>
                    <KategoryItem>
                        <KategoryButton onClick={hendleOpen3}>
                            Sovet davri
                        </KategoryButton>
                    </KategoryItem>
                    <KategoryItem>
                        <KategoryButton onClick={hendleOpen4}>
                            MustaqilKategoryItemk davri
                        </KategoryButton>
                    </KategoryItem>
                </KategoryList>



            </KategoryWrapper>
            <KategoryCardList>
                {
                    card.map((cards) => (
                        <KategoryCardItem>
                             <KategoryCardNavLink to={'/BooksSinglePage'+cards.genre_id+cards.title }>
                            <img src={'http://192.168.37.86:5000/' + cards.image} width='250' height='300' alt='cardimg'/>
                            <KategorTitle>
                                {cards.title}
                            </KategorTitle>
                            <KategorTitle>
                                {cards.price}
                            </KategorTitle>
                            </KategoryCardNavLink>
                        </KategoryCardItem>
                    ))
                }

            </KategoryCardList>

        </>
    )
}

export default Kategory
