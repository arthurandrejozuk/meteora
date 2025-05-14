import Banner from "../components/Banner";
import Categorias from "../components/Categorias";
import EmailReceiver from "../components/EmailReceiver";
import Produtos from "../components/Produtos";
import Vantagens from "../components/Vantagens";
import LayoutDefault from "../layout/Default";

export default function Home(){
    return(
        <LayoutDefault>
            <Banner/>
            <Categorias/>
            <Produtos/>
            <Vantagens/>
            <EmailReceiver/>
        </LayoutDefault>
    )
}