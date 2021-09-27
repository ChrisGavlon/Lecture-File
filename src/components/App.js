import CakeCard from "./CakeCard"
import cakes from "../data"
import Search from "./Search"
import Header from "./Header"
import CakeDetail from "./CakeDetail"
import { useState } from 'react'
import CakeForm from './CakeForm'

function App() {
  const [selectedCake, setSelectedCake] = useState(null)
  const [cakeList, setCakeList] = useState(cakes)
 
  function handleAddCake(cake){
    const newCake = cake;
    setCakeList([...cakeList, newCake])
  }

  return (
    <>
    <Header />
    <CakeForm handleAddCake={handleAddCake}/>
    <Search />
    {selectedCake ? <CakeDetail cake={selectedCake}/> : null}
    {cakeList.map(cake => <CakeCard cake={cake} setSelectedCake={setSelectedCake} selectedCake={selectedCake}/> )}
    </>
  );
}
export default App;