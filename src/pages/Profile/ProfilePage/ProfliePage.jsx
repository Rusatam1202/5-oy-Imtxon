import React, { useEffect, useRef, useState } from 'react'
import Camera from '../../../assets/images/bekentImg/Camera.jpg'
import ProfilImg from '../../../assets/images/AuthorImg.png'
import {
    ProfilePageWrapper,
    ProfilePageImgLable,
    ProfilePageImgLableImg,
    ProfilePageImgLableImgCamera,
    ProfilePageImgLableInput,
    ProfilePageForm, ProfilePageFormTitle, ProfilePageFormLable, ProfilePageFormStrong, ProfilePageFormInput, ProfilePageFormSmall, ProfilePageFormDriver, ProfilePageFormButton
} from './ProfilePageStyled'
import axios from 'axios'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
function ProfliePage() {
const {t}=useTranslation()

    const fristName = useRef()
    const lastName = useRef()
    const phone = useRef()
    const image = useRef()

    const localData = localStorage.getItem('token')
    const hendleSubmit = (evt) => {
        evt.preventDefault();
        const formData = new FormData()
        formData.append('first_name', fristName.current?.value)
        formData.append('last_name', lastName.current?.value)
        formData.append('phone', phone.current?.value)
        formData.append('image', image.current?.files[0])

        
            fetch('http://localhost:5000/user/account', {
                method: 'PUT',
                headers: {
                    Authorization: localData
                },
                body: formData
            })
                .then((res) => res.json())
                .then((data) => console.log(data))
                .catch((err) => console.log(err))
              setTimeout(()=>{
                GetProfile()
              },500)
        }
const [profil,setProfil]=useState([])

        const GetProfile =async()=>{
       const data = await axios.get('http://localhost:5000/user/me',{
                 headers: {
                    Authorization: localData
                }
             })
            console.log(data);
            if(data.status === 201){
                console.log(data.data);
                setProfil(data.data)
            }
        }
console.log(profil);

        useEffect(()=>{
            // hendleSubmit()
            GetProfile()
        },[])
    return (
        <>


            <ProfilePageWrapper>

                <ProfilePageImgLable htmlFor='id'>
                    <ProfilePageImgLableImg src={'http://localhost:5000/' + profil.image} width='175' height='175' alt='Add Profile' />
                    <ProfilePageImgLableImgCamera src={Camera} width='50' height='50' alt="Camera" />
                    <ProfilePageImgLableInput ref={image} type='file' id='id' placeholder='RT' />
                </ProfilePageImgLable>

                <ProfilePageForm onSubmit={hendleSubmit}>
                    <ProfilePageFormTitle>{t("Profile.profile")}</ProfilePageFormTitle>
                    <ProfilePageFormLable htmlFor='first'>
                        <ProfilePageFormStrong>{t("Profile.frise")}</ProfilePageFormStrong>
                        <ProfilePageFormInput defaultValue={profil.first_name} ref={fristName} type='text' id='first' />
                        <ProfilePageFormSmall>{t("Profile.please")}</ProfilePageFormSmall>
                    </ProfilePageFormLable>
                    <ProfilePageFormLable htmlFor='last'>
                        <ProfilePageFormStrong>{t("Profile.last")}</ProfilePageFormStrong>
                        <ProfilePageFormInput defaultValue={profil.last_name} ref={lastName} type='text' id='last' />
                        <ProfilePageFormSmall>{t("Profile.please2")}</ProfilePageFormSmall>
                    </ProfilePageFormLable>
                    <ProfilePageFormLable htmlFor='Phone'>
                        <ProfilePageFormStrong>{t("Profile.phone")}</ProfilePageFormStrong>
                        <ProfilePageFormInput defaultValue={profil.phone} ref={phone} type='number' id='Phone' />
                        <ProfilePageFormSmall>{t("Profile.please3")}</ProfilePageFormSmall>
                    </ProfilePageFormLable>
                    <ProfilePageFormDriver />
                    <ProfilePageFormButton type='submit'>Save Changes</ProfilePageFormButton>
                </ProfilePageForm>


            </ProfilePageWrapper>
        </>
    )
}

export default ProfliePage