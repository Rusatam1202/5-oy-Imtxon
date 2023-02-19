import { NavLink } from "react-router-dom";
import styled from "styled-components";




export const KategoryWrapper = styled.div`
    
    width: 815px;
    margin:0 auto;
    margin-top: 185px;
    margin-bottom: 42px;
    
`
export const KategorTitle = styled.h2`

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 48px;
color: #C9AC8C;
text-align: center;
margin-bottom: 22px;
`
export const KategoryList = styled.ul`
display: flex;
align-items: center;
justify-content: space-between;
gap: 22px;
list-style: none;
padding: 0;
margin: 0;
`
export const KategoryItem = styled.li``
export const KategoryButton = styled(NavLink)`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 27px;
color: rgba(13, 13, 13, 0.6);
border: none;
background: none;
&:hover{
    color:
#C9AC8C;
}

`

export const KategoryCardList = styled.ul`
display: flex;
flex-wrap:wrap;
gap:20px;
list-style: none;
`
export const KategoryCardItem = styled.li`
border: 1px solid gray;
background-color:gray;
border-radius:5px;
`
export const KategoryCardP= styled.p`
text-align: center;
color: white;
text-decoration: none;
`
export const KategoryCardNavLink= styled(NavLink)`

text-decoration: none;

`

