import styles from "./categoria.module.css"




export default function Categorias() {

    const categorias = [
        {
            id: 1,
              categoria: "Bolsas",
            imagem: "../../assets/Desktop/Categorias/Categoria Bolsa.png"
        },
           {
            id: 2,
              categoria: "Calças",
            imagem: "../../assets/Desktop/Categorias/Categoria calça.png"
        },
           {
            id: 3,
              categoria: "Calçados",
            imagem: "../../assets/Desktop/Categorias/Categoria Calçados.png"
        },
           {
            id: 4,
              categoria: "Camisetas",
            imagem: "../../assets/Desktop/Categorias/Categoria camiseta.png"
        },
           {
            id: 5,
            categoria: "Casacos",
            imagem: "../../assets/Desktop/Categorias/Categoria casacos.png"
        },
           {
            id: 6,
            categoria: "Óculos",
            imagem: "../../assets/Desktop/Categorias/Categoria óculos.png"
        },
    ]

    return(
        <div className={styles.container}>
            <h3>Busque por categoria:</h3>
            <div className={styles.categoria}>
                {categorias.map(categoria => (
                    <div className={styles.categoria_item}>
                        <img src={categoria.imagem} alt="" />
                        <p>{categoria.categoria}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}