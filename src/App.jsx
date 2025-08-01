import { useEffect, useState } from 'react'
import './App.css'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import OurRecipes from './components/ourRecipes/OurRecipes'

function App() {
  const [recipes, setRecipes] = useState([]);
  const [wantToCook, setWantToCook] = useState([])

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
      <OurRecipes recipes={recipes} setWantToCook={setWantToCook} wantToCook={wantToCook} />
    </>
  )
}

export default App
