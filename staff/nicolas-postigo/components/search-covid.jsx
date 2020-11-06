function SearchCovid({ onSearchCountry }) {
    return <form className="search_form" onSubmit={function (event) {
        event.preventDefault()
        var countryName = event.target.query.value
        onSearchCountry(countryName)
    }}>
        <input type="text" name="query"/>
        <button type="reset">✖️</button>
        <button type="submit">🔍</button>
    </form>
} 