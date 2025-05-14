
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Menu from './components/Menu'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Categorias from './components/Categorias'
import Produtos from './components/Produtos'
import Vantagens from './components/Vantagens'
import EmailReceiver from './components/EmailReceiver'
import CategoriaProvider from './context/CategoriaContext'
import Modal from './components/Modal'

function App() {

  const [menuAtiva, setMenuAtiva] = useState(false)
  const [ativaModal, setAtivaModal] = useState(false)

  return (
    <CategoriaProvider>
      <Header 
        ativarModal={() => setAtivaModal(!ativaModal)} 
        ativarMenu={() => setMenuAtiva(!menuAtiva)} 
        logged={false}></Header>
      <Menu active={menuAtiva} abrirModal={() => setAtivaModal(!ativaModal)}  logged={true}/>
      <Banner/>
      <Categorias/>
      <Produtos/>
      <Vantagens/>
      <Modal deactivate={() => setAtivaModal(false)} active={ativaModal} />
      <EmailReceiver/>
      <Footer/>
    </CategoriaProvider>
  )
}

export default App
