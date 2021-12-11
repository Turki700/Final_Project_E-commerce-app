import Announcement from "../components/Announcement";
import Categoreies from "../components/Categories";
import Footer from "../components/Footer";
import GardenTeam from "../components/GardenTeam";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
    return ( 
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Categoreies />
            <Products />
            <NewsLetter />
            <Footer />
            <GardenTeam />
        </div>
     );
}
 
export default Home;