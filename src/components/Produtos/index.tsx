import { useContext } from "react"
import type { IProduto } from "../../interfaces/Produto"
import Produto from "../Produto"
import styles from "./produtos.module.css"
import { CategoriaContext } from "../../context/CategoriaContext"

export default function Produtos() {

      const { categoria } = useContext(CategoriaContext);
 
      const produtos = [{
        id: 1,
        img: "../../assets/Desktop/Imagens Cards/Bolsa.png",
        title: "Bolsa coringa",
        desc: "Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!",
        price: 120,
        href: "",
        categoria: "Bolsas"
    }]


 
    const produtosFiltrados = categoria
    ? produtos.filter((produto) => produto.categoria === categoria)
    : produtos;

    return(
        <section className={styles.section_produtos}>
            <h1>
                Produtos que estão bombando!
            </h1>
            <div>
                {produtosFiltrados.map((produto: IProduto) => (
                  <Produto 
                    id={produto.id} 
                    img={produto.img} 
                    categoria={produto.categoria}
                    title={produto.title}
                    desc={produto.desc}
                    href={produto.href}
                    price={produto.price}
                    key={produto.id}
                  />
                ))}
            </div>
        </section>
    )
}