
function Pizza(props) {
    return (
      <div>
      
      {/* {pizzaData.map(pizza=><pizza name={pizza.name}/>)} */}
    <img style={{width:'500px'}}  src={props.pizzaImg} alt={props.name} />
    <h3>{props.name}</h3>
      <h3>{props.ingredients}</h3>
      <h5>{props.price}</h5>
     </div>
  )
}

export default Pizza