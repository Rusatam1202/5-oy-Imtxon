import React, { useRef } from 'react'
import { GlobalStyled } from '../../GloballStyled'
import { Link, NavLink } from 'react-router-dom'
import { RegisterWrapper, RegisterWrapperImg, RegisterWrapperForms, RegisterTitile, RegisterForm, RegisterInput, RegisterButton } from './RegisterStyled'
import RegisterImg from '../../assets/images/Two factor authentication-pana 1.png'
import { api } from '../../API/api'
import { useDispatch } from 'react-redux'
import { setToken } from '../../redux/token/tokenAction'
import { setUser } from '../../redux/users/userAction'
import { useNavigate } from 'react-router-dom'

function Register() {

  const FirstRef = useRef()
  const LastRef = useRef()
  const EmailRef = useRef()
  const PhoneRef = useRef()
  const PassswordRef = useRef()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userRegister = async (user) => {
    console.log("salom");
    const data = await api.userRegister(user)
    
    if(data.status === 201){
      localStorage.setItem('token',data.data.token),
      localStorage.setItem('user',JSON.stringify(data.data.user))
       dispatch(setToken(data.data.token))
      //  dispatch(setUser(data.data.user))
       navigate('/')
    }
  }


  const hendleSubmit = (evt) => {
    evt.preventDefault();
    navigate('/')
    const valuse = {
      first_name: FirstRef.current.value,
      last_name: LastRef.current.value,
      phone: PhoneRef.current.value,
      email: EmailRef.current.value,
      password: PassswordRef.current.value,
    }
    userRegister(valuse)

    // .then((res)=> console.log(res))
    // .catch((err)=>console.log(err))
  }





  return (
    <RegisterWrapper>
      <RegisterWrapperImg>
        <img src={RegisterImg} width='500' height='500' alt='Register-img' />
      </RegisterWrapperImg>
      <RegisterWrapperForms>
        <RegisterTitile>
          Sign up
        </RegisterTitile>
        <p>Already have an account? <NavLink className='text-primary' to='/Logn'>Sing in</NavLink></p>
        <RegisterForm onSubmit={hendleSubmit}>
          <RegisterInput ref={FirstRef} type='text' placeholder='First name' />
          <RegisterInput ref={LastRef} type='text' placeholder='Last name' />
          <RegisterInput ref={PhoneRef} type='tel' placeholder='Phone' />
          <RegisterInput ref={EmailRef} type='email' placeholder='Email' />
          <RegisterInput ref={PassswordRef} type='password' placeholder='Password' />
          <RegisterButton type='submit'>Next step</RegisterButton>
        </RegisterForm>
      </RegisterWrapperForms>

      <GlobalStyled />

    </RegisterWrapper>
  )
}

export default Register
