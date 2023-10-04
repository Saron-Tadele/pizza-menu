import Footer from './Components/Footer';
import Pizza from './Components/Pizza';
import PizzaImg1 from './image/pizza.jpg';
import PizzaImg2 from './image/pizza2.jpg';
import PizzaImg3 from './image/pizza3.jpg';
import Card from './Components/Card'

function App() {
  const pizzaData = [
    {
      pizzaImg: PizzaImg1,
      pizzaName: 'pizza spinach',
      price: '$3.75',
      ingredients: ['spinach', 'tomato', 'cheese'],
    },
    {
      pizzaImg: PizzaImg2,
      pizzaName: 'pizza vegetable',
      price: '$2.45',
      ingredients: ['onion', 'cheese', 'vegetable'],
    },
    {
      pizzaImg: PizzaImg3,
      pizzaName: 'pizza cheese',
      price: '$1.95',
      ingredients: ['spinach', 'chicken', 'cheese'],
    },
  ];
  const pizzas = pizzaData;
  return (
    <>
      <h1>Fast React Pizza Co.</h1>
      <h2>Our menu</h2>

      {pizzas.length > 0 ? (
        pizzas.map((pizza) => (
          <Pizza
            pizzaImg={pizza.pizzaImg}
            pizzaName={pizza.pizzaName}
            price={pizza.price}
            ingredients={pizza.ingredients}
            key={pizza.pizzaName}
          />
        ))
      ) : null}

      <Footer />
      <Card />
    </>
  );
}

export default App;