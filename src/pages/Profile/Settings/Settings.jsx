import React from 'react'
import ProfilHeader from '../ProfilHeader/ProfilHeader'
import {ProfilePageWrapper,
    ProfilePageForm,ProfilePageFormTitle,ProfilePageFormDriver,ProfilePageFormButton,ProfilePageFormSelekt,ProfilePageFormLable,ProfilePageFormStrong,ProfilePageFormSmall,ProfilePageFormSelektOption}from './SettingsStyled'
   

function Settings() {
  return (
    <div>
        <ProfilHeader/>
        <ProfilePageWrapper>

<ProfilePageForm>
<ProfilePageFormTitle>Settings</ProfilePageFormTitle>
<ProfilePageFormLable htmlFor='first'>
    <ProfilePageFormStrong>Language</ProfilePageFormStrong>
    <ProfilePageFormSelekt >
    <ProfilePageFormSelektOption hidden>English</ProfilePageFormSelektOption>
    <ProfilePageFormSelektOption>Ruscha</ProfilePageFormSelektOption>
    <ProfilePageFormSelektOption>O'zbekch</ProfilePageFormSelektOption>
</ProfilePageFormSelekt>
    <ProfilePageFormSmall>Please enter your Language .</ProfilePageFormSmall>
</ProfilePageFormLable>
<label className='d-inline-block' htmlFor='flexSwitchCheckDefault'>Theme</label>
<div class="form-check form-switch  ps-5 w-75 h-25  ">
 
  <input class="form-check-input mb-5 p-2 w-25 h-50" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
</div>




<ProfilePageFormDriver/>
<ProfilePageFormButton type='submit'>Save Changes</ProfilePageFormButton>
</ProfilePageForm>


    </ProfilePageWrapper>
        </div>
  )
}

export default Settings