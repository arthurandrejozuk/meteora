import styles from "./emailReceiver.module.css"

export default function EmailReceiver(){
    return(
        <div className={styles.container}>
            <div className={styles.receiver}>
                <p>
                    Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastra-se!
                </p>
                <div>
                    <input type="text" placeholder="Digite seu email"/>
                    <button>Enviar</button>
                </div>
            </div>
        </div>
    )
}