//https://coronavirus-19-api.herokuapp.com/countries/{countryName}

function searchCovid(token, countryName, callback) {
    if (typeof token !== 'string') throw new TypeError(token + ' is not a token')

    if (!token.trim().length) throw new Error('token is empty or blank')

    if (typeof countryName !== 'string') throw new TypeError(countryName + ' is not a query')

    if (!countryName.trim().length) throw new Error('countryName is empty or blank')

    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a callback')
  
    call('GET', `https://coronavirus-19-api.herokuapp.com/countries/`,
        {}, '', function (status, response) {
            if (status === 200) {
                const covidCountries = JSON.parse(response)

                call('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users', { Authorization: `Bearer ${token}` }, '',
                    (status, response) => {
                        if (status === 200) {
                            const { likes = [] } = JSON.parse(response)



                            callback(null, covidCountries)
                        }
                    })
            } else callback(new Error('sorry, cannot search :('))
        })
}