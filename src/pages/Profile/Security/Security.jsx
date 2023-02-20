import React, { useRef } from 'react'
import {
    ProfilePageWrapper,
    ProfilePageForm, ProfilePageFormTitle, ProfilePageFormLable, ProfilePageFormStrong, ProfilePageFormInput, ProfilePageFormSmall, ProfilePageFormDriver, ProfilePageFormButton
} from './SecurityStyled'

import { useTranslation } from 'react-i18next'
function Security() {

    const {t}=useTranslation()

    const emile = useRef()
    const password = useRef()
    const new_password = useRef()


    const localData = localStorage.getItem('token')
    const hendleSubmit = (evt) => {
        evt.preventDefault();


const userSetting = async () => {
    const res = await fetch("http://localhost:5000/user/secutiry",{
        method:"PUT",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      body:JSON.stringify({
        email: emile.current.value,
        currentPassword: password.current.value,
        newPassword: new_password.current.value,
      }),
    });
    console.log(res);
  };
  userSetting();
    }


    return (
        <div>

            <ProfilePageWrapper>

                <ProfilePageForm onSubmit={hendleSubmit}>
                    <ProfilePageFormTitle>{t("Security.Title")}</ProfilePageFormTitle>
                    <ProfilePageFormLable htmlFor='first'>
                        <ProfilePageFormStrong>{t("Security.Emile")}</ProfilePageFormStrong>
                        <ProfilePageFormInput ref={emile} type='email' id='first' />
                        <ProfilePageFormSmall>{t("Security.Please")}</ProfilePageFormSmall>
                    </ProfilePageFormLable>
                    <ProfilePageFormLable htmlFor='last'>
                        <ProfilePageFormStrong>{t("Security.Current")}</ProfilePageFormStrong>
                        <ProfilePageFormInput ref={password} type='password' id='last' />
                        <ProfilePageFormSmall>{t("Security.Please2")}</ProfilePageFormSmall>
                    </ProfilePageFormLable>
                    <ProfilePageFormLable htmlFor='Phone'>
                        <ProfilePageFormStrong>{t("Security.New")}</ProfilePageFormStrong>
                        <ProfilePageFormInput ref={new_password} type='password' id='Phone' />
                        <ProfilePageFormSmall>{t("Security.Please3")}</ProfilePageFormSmall>
                    </ProfilePageFormLable>
                    <ProfilePageFormDriver />
                    <ProfilePageFormButton type='submit'>{t("Settings.Changes")}</ProfilePageFormButton>
                </ProfilePageForm>


            </ProfilePageWrapper>
        </div>
    )
}

export default Security
