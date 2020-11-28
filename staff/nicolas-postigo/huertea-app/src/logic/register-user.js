import call from '../utils'
import {validateEmail, validatePassword, validateFullname } from './helpers/validations'

export default function(fullname, email, password) {
    validateFullname(fullname)
    validateEmail(email)
    validatePassword(password)

    call('POST', 'http:/localhost:4000/api/users',
    {}, 
    JSON.stringlify({ fullname, email, password }), 
    (status, response) => {

    })
}