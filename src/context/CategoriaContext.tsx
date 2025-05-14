import { createContext, useState  } from "react";
import type { ICategoria } from "../interfaces/Categoria";

export const CategoriaContext = createContext<{

    categorias: ICategoria[],
    categoria: string,
    setCategoria: (categoria: string) => void

} >({categorias: [], categoria: "", setCategoria: () => {}})


    export default function CategoriaProvider({children}: {children: React.ReactNode}) {
 
        const categorias:ICategoria[] = ([
        {
            id: 1,
              categoria: "Bolsas",
            imagem: "../../assets/Desktop/Categorias/Categoria Bolsa.png"
        },
           {
            id: 2,
              categoria: "Calças",
            imagem: "../../assets/Desktop/Categorias/Categoria calça.png"
        },
           {
            id: 3,
              categoria: "Calçados",
            imagem: "../../assets/Desktop/Categorias/Categoria Calçados.png"
        },
           {
            id: 4,
              categoria: "Camisetas",
            imagem: "../../assets/Desktop/Categorias/Categoria camiseta.png"
        },
           {
            id: 5,
            categoria: "Casacos",
            imagem: "../../assets/Desktop/Categorias/Categoria casacos.png"
        },
           {
            id: 6,
            categoria: "Óculos",
            imagem: "../../assets/Desktop/Categorias/Categoria óculos.png"
        },
    ])
      
         const [categoria, setCategoria] = useState("")  

        return (
            <CategoriaContext.Provider value={{categorias, categoria, setCategoria}}>
             {children}
            </CategoriaContext.Provider>
        )
    }