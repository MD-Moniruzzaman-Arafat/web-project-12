import { useEffect, useState } from 'react'
import './App.css'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import OurRecipes from './components/ourRecipes/OurRecipes'

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const recipes = await fetch('./data/recipes.json');
      const data = await recipes.json()
      setRecipes(data)
    }
    loadData()
  }, [])

  console.log(recipes)

  return (
    <>
      <Navbar />
      <Hero />
      <OurRecipes recipes={recipes} />
    </>
  )
}

export default App
