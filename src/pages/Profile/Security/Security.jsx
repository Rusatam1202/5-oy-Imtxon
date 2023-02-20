import React, { useRef } from 'react'
import {
    ProfilePageWrapper,
    ProfilePageForm, ProfilePageFormTitle, ProfilePageFormLable, ProfilePageFormStrong, ProfilePageFormInput, ProfilePageFormSmall, ProfilePageFormDriver, ProfilePageFormButton
} from './SecurityStyled'
function Security() {

    const emile = useRef()
    const password = useRef()
    const new_password = useRef()


    const localData = localStorage.getItem('token')
    const hendleSubmit = (evt) => {
        evt.preventDefault();

//         const userSecurity = async () => {
//             const data = await fetch('http://localhost:5000/user/secutiry', {
//                 method: 'PUT',
//                 headers: {
//                     Authorization: localStorage.getItem('token'),
//                 },
//                 body: JSON.stringify({
//                     email: emile.current?.value,
//                     currentPassword: password.current?.value,
//                     new_password: new_password.current?.value
//                 })


//             })
//             console.log(data);
//         }


//   userSecurity()
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
                    <ProfilePageFormTitle>Change Or Recover Your Password:</ProfilePageFormTitle>
                    <ProfilePageFormLable htmlFor='first'>
                        <ProfilePageFormStrong>Email</ProfilePageFormStrong>
                        <ProfilePageFormInput ref={emile} type='email' id='first' />
                        <ProfilePageFormSmall>Please enter your emile .</ProfilePageFormSmall>
                    </ProfilePageFormLable>
                    <ProfilePageFormLable htmlFor='last'>
                        <ProfilePageFormStrong>Current password</ProfilePageFormStrong>
                        <ProfilePageFormInput ref={password} type='password' id='last' />
                        <ProfilePageFormSmall>Please enter your password.</ProfilePageFormSmall>
                    </ProfilePageFormLable>
                    <ProfilePageFormLable htmlFor='Phone'>
                        <ProfilePageFormStrong>New Password</ProfilePageFormStrong>
                        <ProfilePageFormInput ref={new_password} type='password' id='Phone' />
                        <ProfilePageFormSmall>Please enter your  phone number.</ProfilePageFormSmall>
                    </ProfilePageFormLable>
                    <ProfilePageFormDriver />
                    <ProfilePageFormButton type='submit'>Save Changes</ProfilePageFormButton>
                </ProfilePageForm>


            </ProfilePageWrapper>
        </div>
    )
}

export default Security
