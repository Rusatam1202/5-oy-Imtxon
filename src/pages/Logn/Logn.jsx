import React, { useRef } from 'react'
import { GlobalStyled } from '../../GloballStyled'
import {  NavLink } from 'react-router-dom'
import {RegisterWrapper,RegisterWrapperImg,RegisterWrapperForms,RegisterTitile,RegisterForm,RegisterInput,RegisterButton } from './LognStyled'
import LoginImg from '../../assets/images/Frame.svg'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { api } from '../../API/api'

function Logn() {
const emailRef = useRef()
const passwordlRef = useRef()

const dispatch = useDispatch()
const navigate = useNavigate

const userLogn = async(user)=>{
  const data = await api.userLogin(user)
  if(data.status === 201){
    localStorage.setItem('token',data.data.token),
    localStorage.setItem('user',JSON.stringify(data.data.user))
     dispatch(setToken(data.data.token))
     dispatch(setUser(data.data.user))
     navigate('/')
  }
}

const hendleSubmit = (evt)=>{
  evt.preventDefault()
  const valuse = {
    email: emailRef.current.value,
    password:passwordlRef.current.value,
  }
  userLogn(valuse)
}
  
  return (
    <RegisterWrapper>
      <RegisterWrapperImg>
        <img src={LoginImg} width='500' height='500' alt='Register-img'/>
      </RegisterWrapperImg>
      <RegisterWrapperForms>
      <RegisterTitile>
      Sign in
           </RegisterTitile>
     <p>Do not you have an account?<NavLink className='text-primary' to='/Register'>Sign up</NavLink></p>
     <RegisterForm onSubmit={hendleSubmit}>
      <RegisterInput ref={emailRef} type='email' placeholder='Email'/>
      <RegisterInput ref={passwordlRef} type='password' placeholder='Password'/>
      <RegisterButton type='submit'>Next step</RegisterButton>
     </RegisterForm>
      </RegisterWrapperForms>
     
     <GlobalStyled/>

    </RegisterWrapper>
  )
}

export default Logn

