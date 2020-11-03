function Results2(props) {

  let {title, cases, todayCases, deaths, recovered} = props.itemsFilter

  return  <ul>

      <li key={title} onClick={() => onItem2(title)}>
        <h2>name : {title}</h2>
        <h3>total cases  {cases}</h3>
        <h3>total todayCases  {todayCases}</h3>
        <h3>total deaths  {deaths}</h3>
        <h3>total recovered  {recovered}</h3>
      </li>


  </ul> 
}