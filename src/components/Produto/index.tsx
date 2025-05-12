
import styles from "./produto.module.css"

export default function Produto(){

    const produto = {
        id: 1,
        img: "../../assets/Desktop/Imagens Cards/Bolsa.png",
        title: "Bolsa coringa",
        desc: "Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!",
        price: 120,
        href: "",
        categoria: "bolsas"
    }

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