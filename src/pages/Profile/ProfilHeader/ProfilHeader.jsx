import React from 'react'
import { Outlet } from 'react-router-dom'
import {ProfillWrapper,ProfillHeader,ProfillHeaderNavLink,ProfillHeaderNavLinkStrong,ProfillHeaderNavLinkTitle} from './ProfillHeaderStyled'
import { lang } from '../../../lang/lang'


function ProfilHeader() {
  return (
    <ProfillWrapper>
      <ProfillHeader>
        <ProfillHeaderNavLink to={'ProfliePage'}>
          <ProfillHeaderNavLinkStrong>1</ProfillHeaderNavLinkStrong>
          <ProfillHeaderNavLinkTitle>{lang.uz.header.Profile}</ProfillHeaderNavLinkTitle>
        </ProfillHeaderNavLink >
        <ProfillHeaderNavLink  to={'Security'}>
          <ProfillHeaderNavLinkStrong>2</ProfillHeaderNavLinkStrong>
          <ProfillHeaderNavLinkTitle>Security</ProfillHeaderNavLinkTitle>
        </ProfillHeaderNavLink >
        <ProfillHeaderNavLink  to={'Settings'}>
          <ProfillHeaderNavLinkStrong>4</ProfillHeaderNavLinkStrong>
          <ProfillHeaderNavLinkTitle>Settings</ProfillHeaderNavLinkTitle>
        </ProfillHeaderNavLink >
      </ProfillHeader>
      
      <Outlet/>
      
      
    </ProfillWrapper>
  )
}

export default ProfilHeader
