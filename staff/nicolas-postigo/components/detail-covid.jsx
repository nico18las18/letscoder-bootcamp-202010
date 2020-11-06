function DetailCovid ({ item: { country, cases, todayCases, deaths, todayDeaths, recovered, like}, onLike }) {
    return <section className="detail-covid">

        {<h2> COUNTRY: {country}</h2>}
        {typeof(cases) !==null && <h2> Cases: {cases}</h2>}
        {typeof(todayCases) !== null && <h2>TodayCases: {todayCases}</h2>}
        {typeof(deaths) !== null && <h2>Deaths: {deaths}</h2>}
        {typeof(todayDeaths) !== null && <h2>Today deaths: {todayDeaths}</h2>}
        {typeof(recovered) && <h2>Recovered: {recovered}</h2>}
        {<h3 onClick={event => {
                event.stopPropagation()

               onLike(country)
              
            }}>{like ? <i className="far fa-eye"></i> : <i className="far fa-eye-slash"></i>}</h3>}
    </section>
}