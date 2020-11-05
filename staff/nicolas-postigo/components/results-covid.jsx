function ResultsCovid(props) {

  let {country, cases, todayCases, deaths, recovered} = props.itemsFilter
  console.log(props.itemsFilter)
  return  <ul>

      <ul key={country} onClick={() => onCountry(country)}>
        <h3>COUNTRY : {country}</h3>
        <h3>Total Cases  {cases}</h3>
        <h3>Total Today Cases  {todayCases}</h3>
        <h3>Total Deaths  {deaths}</h3>
        <h3>Total Recovered  {recovered}</h3>
      </ul>
  </ul> 
}