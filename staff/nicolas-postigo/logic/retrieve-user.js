/**
 *  The callback expression that manages the result of the retrive
 *
 * @callback callback
 * 
 * @param {Error} error In case a fail is detected on response from API
 * @param {string} token The retirve token when credentials are correct (validation in API)
 */

/**
 * Retrive of a user by means of token.
 * 
 * @example
 * 
 * retrieveUser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjkxOWUxYTdjYTQ3OTAwMTcxYWM2ZTAiLCJpYXQiOjE2MDMzODAwNjgsImV4cCI6MTYwMzM4MzY2OH0.FNAZAZLCrriw_5kX4cI6cBgeuBzc2gkwcoGyR09wx0g', function(error, user) {
 *    console.log('DEMO retriveUser()')
 * 
 *    if (error) console.error(error)
 *    else console.log(user)
 * })
 * 
 * @param {JSON} token The user's token
 * 
 * @throws {TypeError} On type validation error
 * @throws {Error} On content validation error
 */

const retrieveUser = (token, callback) => {
    if (typeof token !== 'string') throw new TypeError(token + ' is not a token')

    if (!token.trim().length) throw new Error('token is empty or blank')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')
    call('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users', { Authorization: `Bearer ${token}` }, '',
    (status, response) => {
        if (status === 200) {
            const res = JSON.parse(response)

            callback(null, res)
        } else {
            const { error } = JSON.parse(response)

            callback(new Error(error))
        }
    })
} 