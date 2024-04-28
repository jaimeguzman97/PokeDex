import { Navigate, Route, Routes } from 'react-router-dom'
import { PokeApp } from '../PokeApp'
import { PokeDex } from '../pages/PokeDex'
import { FiltersProvider } from '../context/filters'
import { PokemonPage } from '../pages/PokemonPage'
import { Header } from '../components/Header'
import { HomePage } from '../pages/HomePage'


export const AppRouter = () => {
  return (
    <FiltersProvider>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokegrid" element={<PokemonPage />} />
        <Route path='/pokedex/:id' element={<PokeDex />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </FiltersProvider>
  )
} 
