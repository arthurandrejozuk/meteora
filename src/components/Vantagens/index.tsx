
import styles from "./vantagens.module.css"

export default function Vantagens(){


    const vantagens = [
        {
            id: 1,
            img: "../../assets/Desktop/Ícones/x-diamond (2).png",
            title: "PAGUE PELO PIX",
            desc: "Ganhe 5% OFF em pagamentos via PIX"
        },
        {
            id: 2,
            img: "../../assets/Desktop/Ícones/arrow-repeat (2).png",
            title: "TROCA GRÁTIS",
            desc: "Fique livre para trocar em até 30 dias"
        },
        {
            id: 3,
            img: "../../assets/Desktop/Ícones/flower1 (3).png", 
            title: "SUSTENTABILIDADE",
            desc: "Moda responsável, que respeita o meio ambiente"
        }
    ]

    return(
        <div className={styles.container}>
            <h1>Conheça todas as nossas facilidades</h1>
            <div className={styles.vantagens}>
                {vantagens.map(item => (
                <div className={styles.vantagem} key={item.id}>
                    <img src={item.img} alt="" />
                    <div>
                        <h5>
                            {item.title}
                        </h5>
                        <p>
                            {item.desc}
                        </p>
                    </div>
                </div>
                ))} 
            </div>
        </div>
    )
}