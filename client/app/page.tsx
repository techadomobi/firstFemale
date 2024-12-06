import Navbar from "../components/Navbar";
import CategoriesRow from "../components/CategoriesRow";
import ImageSlider from "@/components/ImageSlider";
import ImageCarouselWithFeatures from "@/components/ImageCarouselWithFeatures";
import ImageRows from "@/components/ImageRows";
import "../app/globals.css"; 
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }: any) {
  return (
    <div className="bg-white">
      <Navbar />
      {/* <CategoriesRow/> */}
      <ImageSlider/>
      <ImageRows/>
      <ImageCarouselWithFeatures/>
      <Footer/>
    </div>
  );
}

export default MyApp;
