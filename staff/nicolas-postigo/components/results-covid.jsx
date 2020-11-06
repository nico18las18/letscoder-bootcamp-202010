function ResultsCovid({ items, onCountry, onLike }) {
  console.log(items)
  return <ul>
    {items.map(({ country, cases, like }) => {

      return <li key={country} onClick={() => onCountry(country)}>
        <h3>COUNTRY : {country}</h3>
        <h3>Total Cases  {cases}</h3>
        <h3 onClick={event => {
          event.stopPropagation()
          onLike(country)
        }
        } >{like ? '❤️' : '🖤'}</h3>
      </li>
    })}
  </ul>
}