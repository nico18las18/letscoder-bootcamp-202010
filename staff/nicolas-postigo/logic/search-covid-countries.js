//https://coronavirus-19-api.herokuapp.com/countries/{countryName}
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
function searchCovidCountries(token, query, callback) {
    call('GET', 'https://coronavirus-19-api.herokuapp.com/countries/', {}, '', (status, response) => {
        if (status === 200) {
            const countries = JSON.parse(response)

            let results = countries.filter(({ country }) => country.includes(query))

            results = results.map(({ country, cases }) => ({ country, cases }))

            call('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users', { Authorization: `Bearer ${token}` }, '',
                (status, response) => {
                    if (status === 200) {
                        const { likes = [] } = JSON.parse(response)

                        results.forEach(country => country.like = likes.includes(country.country))

                        callback(null, results)
                    }
                })

        } else callback(new Error('cannot search :('))
    })
}
