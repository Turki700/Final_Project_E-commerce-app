import Announcement from "../components/Announcement";
import Categoreies from "../components/Categories";
import Navbar from "../components/Navbar";
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
        </div>
     );
}
 
export default Home;