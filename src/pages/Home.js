import Diferenciais from "../components/Diferenciais/Diferenciais"
import EncontreSeuSonho from "../components/EncontreSeuSonho/EncontreSeuSonho"
import FichaTecnica from "../components/FichaTecnica/FichaTecnica"
import Footer from "../components/Footer/Footer"
import Galeria from "../components/Galeria/Galeria"
import Header from "../components/Header/Header"
import MainSection from "../components/MainSection/MainSection"
import Maps from "../components/Maps/Maps"
import Plantas from "../components/Plantas/Plantas"
import Porque from "../components/Porque/Porque"
import Sobre from "../components/Sobre/Sobre"




function Home() {
    return (
        <div className="home">
            <Header />
            <MainSection />
            <Porque />
            <Sobre />
            <Galeria />
            <Diferenciais />
            <Plantas />
            <FichaTecnica />
            <EncontreSeuSonho />
            <Maps />
            <div className="footer-section">
                <Footer />
            </div>
        </div>
    )
}

export default Home