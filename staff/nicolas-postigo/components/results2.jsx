function Results2({items, onItem2}) {
    return <> <ul>

    {items.forEach(({ country, cases, todayCases, deaths, todayDeaths, recovered }) => <li key={country} onClick={() => onItem2(country)}>
    <h2>name : {country}</h2> 
         <h3>total cases  {cases}</h3>
         <h3>total todayCases  {todayCases}</h3>
         <h3>total deaths  {deaths}</h3>
         <h3>total todayDeaths  {todayDeaths}</h3>
         <h3>total recovered  {recovered}</h3>
    </li> )}


        </ul> </>

}