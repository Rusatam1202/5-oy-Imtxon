import React from 'react'
import Camera from '../../../assets/images/bekentImg/Camera.jpg'
import ProfilImg from '../../../assets/images/AuthorImg.png'
import {ProfilePageWrapper,
    ProfilePageImgLable,
    ProfilePageImgLableImg,
    ProfilePageImgLableImgCamera,
    ProfilePageImgLableInput,
    ProfilePageForm,ProfilePageFormTitle,ProfilePageFormLable,ProfilePageFormStrong,ProfilePageFormInput,ProfilePageFormSmall,ProfilePageFormDriver,ProfilePageFormButton}from './ProfilePageStyled'
import ProfilHeader from '../ProfilHeader/ProfilHeader'

function ProfliePage() {
  return (
    <>
<ProfilHeader/>

    <ProfilePageWrapper>

<ProfilePageImgLable htmlFor='id'>
    <ProfilePageImgLableImg src={ProfilImg} width='175' height='175' alt='Add Profile' />
<ProfilePageImgLableImgCamera src={Camera} width='50' height='50' alt="Camera" />
<ProfilePageImgLableInput type='file' id='id' placeholder='RT'/>
</ProfilePageImgLable>

<ProfilePageForm>
<ProfilePageFormTitle>My profile</ProfilePageFormTitle>
<ProfilePageFormLable htmlFor='first'>
    <ProfilePageFormStrong>First Name</ProfilePageFormStrong>
    <ProfilePageFormInput  type='text' id='first' />
    <ProfilePageFormSmall>Please enter your first name.</ProfilePageFormSmall>
</ProfilePageFormLable>
<ProfilePageFormLable htmlFor='last'>
    <ProfilePageFormStrong>Last Name</ProfilePageFormStrong>
    <ProfilePageFormInput  type='text' id='last' />
    <ProfilePageFormSmall>Please enter your last Name.</ProfilePageFormSmall>
</ProfilePageFormLable>
<ProfilePageFormLable htmlFor='Phone'>
    <ProfilePageFormStrong>Phone</ProfilePageFormStrong>
    <ProfilePageFormInput  type='number' id='Phone' />
    <ProfilePageFormSmall>Please enter your  phone number.</ProfilePageFormSmall>
</ProfilePageFormLable>
<ProfilePageFormDriver/>
<ProfilePageFormButton type='submit'>Save Changes</ProfilePageFormButton>
</ProfilePageForm>


    </ProfilePageWrapper>
    </>
  )
}

export default ProfliePage