import Footer from "../components/Footer";
import Header from "../components/Header";
import SlideImgSection from "./SlideImgSection";
  

const Home = () => {
    return (
        <div className="w-full overflow-x-hidden">
            <Header/>
            <SlideImgSection />
            <Footer/>
        </div>
    );
};

export default Home;