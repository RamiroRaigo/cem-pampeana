import Footer from "../components/Footer";
import Header from "../components/Header";
import ContentElectromecanica from "./ContentElectromecanica";


const Electromecanica = () => {
    return (
        <div className="w-full overflow-x-hidden">
            <Header/>
            <ContentElectromecanica/>
            <Footer/>
        </div>
    );
};

export default Electromecanica;