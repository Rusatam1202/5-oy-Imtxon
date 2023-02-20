import React from 'react'
import { Outlet } from 'react-router-dom'
import {ProfillWrapper,ProfillHeader,ProfillHeaderNavLink,ProfillHeaderNavLinkStrong,ProfillHeaderNavLinkTitle} from './ProfillHeaderStyled'
import { lang } from '../../../lang/lang'
import { useTranslation } from 'react-i18next';


function ProfilHeader() {

  const {t}=useTranslation()
  return (
    <ProfillWrapper>
      <ProfillHeader>
        <ProfillHeaderNavLink to={'ProfliePage'}>
          <ProfillHeaderNavLinkStrong>1</ProfillHeaderNavLinkStrong>
          <ProfillHeaderNavLinkTitle>{t("header.Profile")}</ProfillHeaderNavLinkTitle>
        </ProfillHeaderNavLink >
        <ProfillHeaderNavLink  to={'Security'}>
          <ProfillHeaderNavLinkStrong>2</ProfillHeaderNavLinkStrong>
          <ProfillHeaderNavLinkTitle>{t("header.Security")}</ProfillHeaderNavLinkTitle>
        </ProfillHeaderNavLink >
        <ProfillHeaderNavLink  to={'Settings'}>
          <ProfillHeaderNavLinkStrong>4</ProfillHeaderNavLinkStrong>
          <ProfillHeaderNavLinkTitle>{t("header.Settings")}</ProfillHeaderNavLinkTitle>
        </ProfillHeaderNavLink >
      </ProfillHeader>
      
      <Outlet/>
      
      
    </ProfillWrapper>
  )
}

export default ProfilHeader
