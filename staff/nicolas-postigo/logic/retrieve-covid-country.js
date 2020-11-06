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