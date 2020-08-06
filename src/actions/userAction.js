import Axios from 'axios'
import { URL, LOGIN, LOG_OUT, SIGN_UP } from '../actions'

export const SignIn = (body) => {
    return async (dispatch) => {
        try {
            const res = await Axios.post(URL + '/login', body)

            // save token into local storage
            localStorage.setItem('id', res.data.user_id)
            localStorage.setItem('token', res.data.token)

            dispatch({ type : LOGIN, payload : res.data })
        } catch(err) {
            console.log(err ? 'ERROR : ' + err.response.data : err)
        }
    }
}

export const KeepLogin = () => {
    return async (dispatch) => {
        try {
            // get token from local storage
            const token = localStorage.getItem('token')

            // get user data using url keep login
            const res = await Axios.post(URL + '/users/keeplogin', { token })
            console.log(res.data)

            dispatch({ type : LOGIN, payload : res.data })
        } catch (err) {
            localStorage.removeItem('id')
            localStorage.removeItem('token')
            dispatch({ type : LOG_OUT })
            console.log(err ? 'ERROR : ' + err.response.data : err)
        }
    }
}

export const LogOut = () => {
    return {
        type : LOG_OUT
    }
}

export const signUp = (body) => {
    return async (dispatch) => {
        try {
            // add data
            const res = await Axios.post(URL + '/register', body)
            console.log(res.data)

            dispatch({ type : SIGN_UP })
        } catch(err) {
            console.log(err ? 'ERROR : ' + err.response.data : err)
        }
    }
}