import { useEffect, useState } from 'react'
import './App.css'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import OurRecipes from './components/ourRecipes/OurRecipes'

function App() {
  const [recipes, setRecipes] = useState([]);
  const [wantToCook, setWantToCook] = useState([])
  const [CurrentlyCook, setCurrentlyCook] = useState([])
  const [min, setMin] = useState(0)
  const [calories, setCalories] = useState(0)

  useEffect(() => {
    const loadData = async () => {
      const recipes = await fetch('./data/recipes.json');
      const data = await recipes.json()
      setRecipes(data)
    }
    loadData()
  }, [])

  console.log(wantToCook)

  return (
    <>
      <Navbar />
      <Hero />
      <OurRecipes recipes={recipes} setWantToCook={setWantToCook} wantToCook={wantToCook} CurrentlyCook={CurrentlyCook} setCurrentlyCook={setCurrentlyCook} min={min} setMin={setMin} calories={calories} setCalories={setCalories} />
    </>
  )
}

export default App
