import { NavLink } from "react-router-dom";
import styled from "styled-components";
// 


export const HomeWrapper =styled.div`
width: 1301px;
margin: 0;
padding: 21px 0 0 100px;

`
export const HomeHeader =styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
export const HomeHeaderTitle =styled.h2`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 25px;
line-height: 38px;
color: #D1B89D;
`
export const HomeHeaderText =styled.p`

`
export const HomeDropDown =styled.div`


`


export const HomeDropDownlogo =styled.img`
border-radius:50px;
background-color: red;
border: 1px solid black;
margin-right: 10px;

`
export const HomeDropDownLink =styled.div`
padding: 8px 34px;
background: #F5F5F5;
position: absolute;
top: 80px;
right: 50px;
border-radius:10px;
display: none;

&.active{
    display: block;
}
`
export const HomeHeaderNavLink = styled(NavLink)`
display: block;
margin-bottom: 16px;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #000000;
text-decoration: none;
`
export const HomeHeaderNavLinkGlavni = styled(NavLink)`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 144.4%;
text-decoration: none;
color: #0D0D0D;
margin-right: 42px;
&.active{
   opacity: 0.5;
}

`
export const HomeHeaderNavWrapper =styled.div`
display: flex;
align-items: center;
justify-content: space-between;

`

// export const HomeWrapper =styled.div``