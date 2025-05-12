import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import LogoDesktop from "../../assets/Desktop/Logo-desktop.png"
import styles from "./header.module.css"
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Avatar from "../../assets/Desktop/Ícones/ícone-avatar.png";

export default function Header({logged, ativarMenu}:{logged:boolean, ativarMenu: () => void}){
    return(
        <header className={styles.header_container}>
            <div className={styles.div_options}>
                <img className={styles.logo} src={LogoDesktop} alt="Logo com titulo Meteora" />
                <div className={styles.div_ul} >
                    <ul className={styles.ul_option}>
                        <li>
                            <a href="/">Home</a>
                        </li>
                         <li>
                            <a href="/">Nossas lojas</a>
                        </li>
                         <li>
                            <a href="/">Novidades</a>
                        </li>
                         <li>
                            <a href="/">Promoções</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.header_input}>
                <input type="text" placeholder="Digite o produto"/>
                <button>
                    Buscar
                </button>
            </div>
            <div className={styles.login_container}>
                {!logged ? (
                <div className={styles.login_sign}>
                    <button className={styles.login}>
                        Login
                    </button>
                    <button className={styles.signin}>
                        Cadastro
                    </button>
                </div>
                ): (
                    <div className={styles.logged}>
                        <img className={styles.avatar} src={Avatar} alt="" />
                        <a className={styles.leave} href="/logout">
                            Sair
                        </a>
                    </div>
                )}
                <FontAwesomeIcon onClick={ativarMenu} className={styles.icon_hamb} color="white" icon={faBars} />
            </div>
        </header>
    )
}