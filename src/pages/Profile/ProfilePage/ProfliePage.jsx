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

function ProfliePage() {


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
                    <ProfilePageFormTitle>My profile</ProfilePageFormTitle>
                    <ProfilePageFormLable htmlFor='first'>
                        <ProfilePageFormStrong>First Name</ProfilePageFormStrong>
                        <ProfilePageFormInput defaultValue={profil.first_name} ref={fristName} type='text' id='first' />
                        <ProfilePageFormSmall>Please enter your first name.</ProfilePageFormSmall>
                    </ProfilePageFormLable>
                    <ProfilePageFormLable htmlFor='last'>
                        <ProfilePageFormStrong>Last Name</ProfilePageFormStrong>
                        <ProfilePageFormInput defaultValue={profil.last_name} ref={lastName} type='text' id='last' />
                        <ProfilePageFormSmall>Please enter your last Name.</ProfilePageFormSmall>
                    </ProfilePageFormLable>
                    <ProfilePageFormLable htmlFor='Phone'>
                        <ProfilePageFormStrong>Phone</ProfilePageFormStrong>
                        <ProfilePageFormInput defaultValue={profil.phone} ref={phone} type='number' id='Phone' />
                        <ProfilePageFormSmall>Please enter your  phone number.</ProfilePageFormSmall>
                    </ProfilePageFormLable>
                    <ProfilePageFormDriver />
                    <ProfilePageFormButton type='submit'>Save Changes</ProfilePageFormButton>
                </ProfilePageForm>


            </ProfilePageWrapper>
        </>
    )
}

export default ProfliePage