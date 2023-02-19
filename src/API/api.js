import React from 'react'
import axios from 'axios'

const BASE_URL = 'http://192.168.37.86:5000'

export const api={
    userRegister:(user)=> axios.post(BASE_URL + '/user/register',user),
    userLogin:(user)=> axios.post(BASE_URL + '/user/login',user)
    

}
