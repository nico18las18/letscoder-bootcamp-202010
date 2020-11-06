/**
 *  The callback expression that manages the result of the searching of countries
 *
 * @callback callback
 * 
 * @param {Error} error In case a fail is detected on response from API
 * @param {string} token The searching of countries token when credentials are correct (validation in API)
 */

/**
 * 
 * @param {JSON} token The user token
 * @param {string} query The query sent by user to search
 * @param {callback} callback The callback expression that manages the result of the searching
 * 
 * @throws {TypeError} On type validation error
 * @throws {Error} On content validation error
 */
const retrieveCovidCountry = (token, countryId, callback) => {
    if (typeof token !== 'string') throw new TypeError(token + ' is not a token')

    if (!token.trim().length) throw new Error('token is empty or blank')

    if (typeof countryId !== 'string') throw new TypeError(countryId + ' is not a countryId')

    if (!countryId.trim().length) throw new Error('countryId is empty or blank')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')
   
        call('GET', `https://coronavirus-19-api.herokuapp.com/countries/${countryId}`, {}, '',
            (status, response) => {
                if (status === 200) {
                    const country = JSON.parse(response)
                    if (country)
                        call('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users', { Authorization: `Bearer ${token}` }, '',
                            (status, response) => {
                                if (status === 200) {
                                    const { likes = [] } = JSON.parse(response)

                                    country.like = likes.includes(countryId)

                                    callback(null, country)
                                }
                            })
                    else callback(null, country)

                } else {
                    const { error } = JSON.parse(response)

                    callback(new Error(error))
                }
            })
    }