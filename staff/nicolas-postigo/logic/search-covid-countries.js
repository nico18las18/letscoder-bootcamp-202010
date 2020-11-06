//https://coronavirus-19-api.herokuapp.com/countries/{countryName}

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
