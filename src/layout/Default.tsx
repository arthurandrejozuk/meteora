import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu";
import CategoriaProvider from "../context/CategoriaContext";

export default function LayoutDefault({children}:{children:React.ReactNode}){

    
    const [menuAtiva, setMenuAtiva] = useState(false)

    return(
          <CategoriaProvider>
              <Header ativarMenu={() => setMenuAtiva(!menuAtiva)} logged={false}></Header>
              <Menu active={menuAtiva} logged={true}/>
                {children}
              <Footer/>
            </CategoriaProvider>
    )
}