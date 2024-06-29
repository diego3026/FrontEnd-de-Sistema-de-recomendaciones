import Header from "@/components/Principal/Principal_Header/PrincipalHeader"
import Caracteristicas from '@/components/Caracteristicas/Caracteristicas'
import Footer from '@/components/Footer/Footer'

const caracteristicas: React.FC = () =>{
  
    return (
        <>
            <Header colorNameLogo={true} colorUbi={true}/>
            <Caracteristicas/>
            <Footer/>
        </>
    )
}
export default caracteristicas