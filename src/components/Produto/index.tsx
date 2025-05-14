
import type { IProduto } from "../../interfaces/Produto"
import styles from "./produto.module.css"

export default function Produto(produto: IProduto){

  

    return(
        <div className={styles.card}  key={produto.id}>
            <img src={produto.img} alt={produto.title} />
            <div className={styles.card_desc}>
                <h5>
                    {produto.title}
                </h5>
                <p>
                    {produto.desc}
                </p>
                <p><strong>R${produto.price.toPrecision(5)}</strong></p>
                <button>
                    Ver mais
                </button>
            </div>
        </div>
    )
}