
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Menu from './components/Menu'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Categorias from './components/Categorias'
import Produtos from './components/Produtos'

function App() {

  const [menuAtiva, setMenuAtiva] = useState(false)

  return (
    <>
      <Header ativarMenu={() => setMenuAtiva(!menuAtiva)} logged={false}></Header>
      <Menu active={menuAtiva} logged={true}/>
      <Banner/>
      <Categorias/>
      <Produtos/>
      <Footer/>
    </>
  )
}

export default App
