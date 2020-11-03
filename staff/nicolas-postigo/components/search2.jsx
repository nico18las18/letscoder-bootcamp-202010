function Search2({ onSearch2 }) {
    return <form onSubmit={function (event) {
        event.preventDefault()
        var countryName = event.target.countryName.value
        
        console.log(countryName)
        onSearch2(countryName)
    }}>
        <input type="text" name="countryName" required />
        <button type="reset">✖️</button>
        <button type="submit">🔍</button>
    </form>
} 