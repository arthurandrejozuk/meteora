import styles from "./menu.module.css";


export default function Menu({logged, active, abrirModal}:{logged:boolean, active: boolean, abrirModal: () => void}){
    
    if(active){
        return(
            <div className={styles.menu_container}>
                <nav className={styles.menu_nav}>
                    <ul>
                        <li>
                            <a href="">Home</a>
                        </li>
                         <li>
                           <a href="">Nossas lojas</a> 
                        </li>
                         <li>
                            <a href="">Novidades</a>
                            
                        </li>
                         <li>
                            <a href="">Promoções</a> 
                        </li>
                    </ul>
                    <div className="menu_account">
                        {logged ? (
                            <div className={styles.login_sign}>
                                <button onClick={abrirModal} className={styles.login}>
                                    Login
                                </button>
                                <button className={styles.signin}>
                                    Cadastro
                                </button>
                            </div>
                        ): (
                            <a href="/logout">Sair</a>
                        )}  
                    </div>
                </nav>
            </div>
        )
    }
}