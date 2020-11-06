/**
 *  The callback expression that manages the result of the modification
 *
 * @callback callback
 * 
 * @param {Error} error In case a fail is detected on response from API
 * @param {string} token The modify token when credentials are correct (validation in API)
 */

/**
 * Modification of a user by means of token.
 * 
 * @example
 * 
 * modifyUser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjkxNTE4NzJkMjE3YzAwMTc2ZDhiNzEiLCJpYXQiOjE2MDM4OTkyNDAsImV4cCI6MTYwMzkwMjg0MH0.PC28kXu1NWgGiPGRJMZk7vnfcE0ZVe2xpaGC6_8e3Ds',
 *   { age: 24, country: 'Argentina', image: 'https://media.giphy.com/media/aZ3LDBs1ExsE8/giphy.gif' },
 *  function (error) {
 *      if (error) return console.error(error.message)
 * 
 *     console.log('ok, modified')
 *  })
 * 
 * @param {JSON} token The user token
 * @param {string} update The user's changes
 * @param {callback} callback The callback expression that manages the result of the modification
 * 
 * @throws {TypeError} On type validation error
 */

function modifyUser(token,update,callback) {
    if (typeof update !== "object") throw new TypeError("update is not an object")
    if (Object.keys(update).length === 0) throw new TypeError("update is blank or empty") 
    if (typeof token !== "string") throw new TypeError("token is not a string")
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')
    call('PATCH', 
    'https://b00tc4mp.herokuapp.com/api/v2/users',
    { 'Authorization': 'Bearer ' + token, 'Content-type': 'application/json' },
    JSON.stringify(update), 
    function (status, response) {
        if (status === 204){ 
            callback(null)
        }else {
            var res = JSON.parse(response)
            callback(new Error(res.error))
            }
        }
    )} 