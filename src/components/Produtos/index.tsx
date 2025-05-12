import Produto from "../Produto"
import styles from "./produtos.module.css"

export default function Produtos() {
    return(
        <section className={styles.section_produtos}>
            <h1>
                Produtos que estão bombando!
            </h1>
            <div>
                <Produto/>
            </div>
        </section>
    )
}