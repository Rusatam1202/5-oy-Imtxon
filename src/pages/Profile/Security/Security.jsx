import React from 'react'
import ProfillHeader  from '../ProfilHeader/ProfilHeader'
import {ProfilePageWrapper,
    ProfilePageForm,ProfilePageFormTitle,ProfilePageFormLable,ProfilePageFormStrong,ProfilePageFormInput,ProfilePageFormSmall,ProfilePageFormDriver,ProfilePageFormButton}from './SecurityStyled'
function Security() {
  return (
    <div>
<ProfillHeader/>
<ProfilePageWrapper>

<ProfilePageForm>
<ProfilePageFormTitle>Change Or Recover Your Password:</ProfilePageFormTitle>
<ProfilePageFormLable htmlFor='first'>
    <ProfilePageFormStrong>Email</ProfilePageFormStrong>
    <ProfilePageFormInput  type='email' id='first' />
    <ProfilePageFormSmall>Please enter your emile .</ProfilePageFormSmall>
</ProfilePageFormLable>
<ProfilePageFormLable htmlFor='last'>
    <ProfilePageFormStrong>Current password</ProfilePageFormStrong>
    <ProfilePageFormInput  type='password' id='last' />
    <ProfilePageFormSmall>Please enter your password.</ProfilePageFormSmall>
</ProfilePageFormLable>
<ProfilePageFormLable htmlFor='Phone'>
    <ProfilePageFormStrong>New Password</ProfilePageFormStrong>
    <ProfilePageFormInput  type='password' id='Phone' />
    <ProfilePageFormSmall>Please enter your  phone number.</ProfilePageFormSmall>
</ProfilePageFormLable>
<ProfilePageFormDriver/>
<ProfilePageFormButton type='submit'>Save Changes</ProfilePageFormButton>
</ProfilePageForm>


    </ProfilePageWrapper>
    </div>
  )
}

export default Security
