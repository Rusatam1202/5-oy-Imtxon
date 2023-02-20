import React from 'react'
import {ProfilePageWrapper,
    ProfilePageForm,ProfilePageFormTitle,ProfilePageFormDriver,ProfilePageFormButton,ProfilePageFormSelekt,ProfilePageFormLable,ProfilePageFormStrong,ProfilePageFormSmall,ProfilePageFormSelektOption}from './SettingsStyled'
    import { useTranslation } from 'react-i18next'
    import i18next from 'i18next'

function Settings() {

  const {t}=useTranslation()
  return (
    <div>
       
        <ProfilePageWrapper>

<ProfilePageForm>
<ProfilePageFormTitle>{t("Settings.Settings")}</ProfilePageFormTitle>
<ProfilePageFormLable htmlFor='first'>
    <ProfilePageFormStrong>{t("Settings.Language")}</ProfilePageFormStrong>
    <ProfilePageFormSelekt defaultValue={i18next.language} onChange={(evt)=>i18next.changeLanguage(evt.target.value)} >
    <ProfilePageFormSelektOption value='en'>English</ProfilePageFormSelektOption>
    <ProfilePageFormSelektOption value="ru">Ruscha</ProfilePageFormSelektOption>
    <ProfilePageFormSelektOption value='uz' >O'zbekcha</ProfilePageFormSelektOption>
</ProfilePageFormSelekt>
    <ProfilePageFormSmall>{t("Settings.Please")}</ProfilePageFormSmall>
</ProfilePageFormLable>
<label className='d-inline-block' htmlFor='flexSwitchCheckDefault'>{t("Settings.Theme")}</label>
<div class="form-check form-switch  ps-5 w-75 h-25  ">
 
  <input class="form-check-input mb-5 p-2 w-25 h-50" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
</div>




<ProfilePageFormDriver/>
<ProfilePageFormButton type='submit'>{t("Settings.Changes")}</ProfilePageFormButton>
</ProfilePageForm>


    </ProfilePageWrapper>
        </div>
  )
}

export default Settings