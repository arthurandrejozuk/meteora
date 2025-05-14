
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./modal.module.css"
import { faX} from '@fortawesome/free-solid-svg-icons'

export default function Modal({active, deactivate}:{active:boolean, deactivate: () => void}){
    if(active){
        return(
            <div className={styles.container}>
                <div className={styles.modal_content}>
                    <div className={styles.header}>
                        <div>
                          <img src="../../assets/Desktop/Ícones/ícone-login.png" alt="" />
                          <p>Login</p>
                        </div>
                        <FontAwesomeIcon icon={faX} onClick={deactivate}/>
                    </div>
                    <div className={styles.body}>
                        <div>
                            <div>
                                <h1>
                                    Boas-vindas de volta!
                                </h1>
                                <p>
                                    Preencha seus dados para entrar:
                                </p>
                            </div>
                            <form>
                                <label htmlFor="">
                                    Email
                                </label>
                                <input type="text" placeholder="Digite seu email" />
                                <label htmlFor="">
                                    Senha
                                </label>
                                <input type="password" placeholder="Digite sua senha" />
                                <button>
                                    Entrar
                                </button>
                            </form>
                            <div className={styles.footer}>
                                <p>
                                    Ainda não tem conta?
                                </p>
                                <a href="">Faça seu cadastro!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return <></>
    }

}