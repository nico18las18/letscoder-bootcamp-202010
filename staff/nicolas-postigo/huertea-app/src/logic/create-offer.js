import { call } from '../utils'
import { validateToken, validateUpdate, validateCallback } from './helpers/validations'

export default function (token, update, callback) {
    validateToken(token)
    validateUpdate(update)
    validateCallback(callback)

    call('PATCH',
        'https://b00tc4mp.herokuapp.com/api/v2/users',
        { 'Authorization': 'Bearer ' + token, 'Content-type': 'application/json' },
        JSON.stringify(update),
        function (status, response) {
            if (status === 204) {
                callback(null)
            } else {
                var res = JSON.parse(response)
                callback(new Error(res.error))
            }
        }
    )
} 
