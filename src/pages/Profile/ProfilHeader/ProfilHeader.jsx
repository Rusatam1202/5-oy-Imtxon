import React from 'react'
import {ProfillWrapper,ProfillHeader,ProfillHeaderNavLink,ProfillHeaderNavLinkStrong,ProfillHeaderNavLinkTitle} from './ProfillHeaderStyled'

function ProfilHeader() {
  return (
    <ProfillWrapper>
      <ProfillHeader>
        <ProfillHeaderNavLink to={'/ProfliePage'}>
          <ProfillHeaderNavLinkStrong>1</ProfillHeaderNavLinkStrong>
          <ProfillHeaderNavLinkTitle>Profile</ProfillHeaderNavLinkTitle>
        </ProfillHeaderNavLink >
        <ProfillHeaderNavLink  to={'/Security'}>
          <ProfillHeaderNavLinkStrong>2</ProfillHeaderNavLinkStrong>
          <ProfillHeaderNavLinkTitle>Security</ProfillHeaderNavLinkTitle>
        </ProfillHeaderNavLink >
        <ProfillHeaderNavLink  to={'/Settings'}>
          <ProfillHeaderNavLinkStrong>4</ProfillHeaderNavLinkStrong>
          <ProfillHeaderNavLinkTitle>Settings</ProfillHeaderNavLinkTitle>
        </ProfillHeaderNavLink >
      </ProfillHeader>
      
      
    </ProfillWrapper>
  )
}

export default ProfilHeader
