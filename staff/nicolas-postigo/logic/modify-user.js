function modifyUser(token,update,callback) {
<<<<<<< HEAD
    /* if (typeof update !== "object") throw new TypeError("update is not an object")
    if (Object.keys(update).length === 0) throw new TypeError("update is blank or empty") */
=======
    if (typeof update !== "object") throw new TypeError("update is not an object")
    if (Object.keys(update).length === 0) throw new TypeError("update is blank or empty") 
>>>>>>> a927c41e70b8ca76ee79303feb8ef6740fcbe211
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