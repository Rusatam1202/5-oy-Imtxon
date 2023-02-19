import { NavLink } from "react-router-dom";
import styled from "styled-components";




export const ProfillWrapper = styled.div``

export const ProfillHeader = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
export const ProfillHeaderNavLink = styled(NavLink)`
width: 455px;
display: flex;
align-items: center;
padding: 23px;
text-decoration: none;
background: #F3F6F9;
&.active{
    background: #DDE6F5;
border-radius: 4px 4px 0px 0px;
}
`
export const ProfillHeaderNavLinkStrong = styled.strong`
background: #E5EAEE;
border-radius: 4px;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #3699FF;
padding: 6px 12px;
margin-right: 8px;
&.active{
    background: #152540;
border-radius: 4px;
color: #FFFFFF;
}
`
export const ProfillHeaderNavLinkTitle = styled.h4`

font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 21px;
color: #464E5F;

`

