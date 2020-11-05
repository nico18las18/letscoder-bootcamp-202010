//https://coronavirus-19-api.herokuapp.com/countries/{countryName}

function searchCovidCountries(query, callback) {
    call('GET', 'https://coronavirus-19-api.herokuapp.com/countries/', {}, '', (status, response) => {
       if (status === 200) {
           const countries = JSON.parse(response)

           let results = countries.filter(({country}) => country.includes(query))

           results = results.map(({ country, cases }) => ({ country, cases }))

           callback(null, results)
       } else callback(new Error('cannot search :('))
    }) 
}
