import { useState } from 'react';
import Hero from './components/Hero';
import './App.css';
import AddCoffee from './components/AddCoffee';
import CoffeeList from './components/CoffeeList';

export default function App() {
  const [coffees, setCoffees] = useState()
  return (<>
  <Hero />
  <AddCoffee setcoffees={setCoffees}/>
<CoffeeList coffees={coffees}/>




  </>
   
  );
}


