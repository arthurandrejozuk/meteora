import { useContext } from "react"
import styles from "./categoria.module.css"
import { CategoriaContext } from "../../context/CategoriaContext"
import type { ICategoria } from "../../interfaces/Categoria"




export default function Categorias() {

   const context = useContext(CategoriaContext);
if (!context) return null;

const { categorias,  setCategoria } = context;

    return(
        <div className={styles.container}>
            <h3>Busque por categoria:</h3>
            <div className={styles.categoria}>
                {categorias?.map((categoria:ICategoria) => (
                    <div onClick={() => setCategoria(categoria.categoria)} className={styles.categoria_item}>
                        <img src={categoria.imagem} alt="" />
                        <p>{categoria.categoria}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}