import React from 'react'
import axios from 'axios'

const BASE_URL = 'http://localhost:5000'

export const api={
    userRegister:(user)=> axios.post(BASE_URL + '/register',user),
    userLogin:(user)=> axios.post(BASE_URL + '/user/login',user)
}
