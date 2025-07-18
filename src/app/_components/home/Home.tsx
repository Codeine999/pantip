import HeroSection from "./HeroSection";
import TrendSection from "./TrendSection";
import RoomSection from "./RoomSection";
import FeedSection from "./FeedSection";

const Home = () => {
    return (
        <>
            <HeroSection />
            <div 
                className="mt-8 xl:px-16 md:px-8 px-4
                    flex flex-col gap-14 mb-12"
            >
                <TrendSection />
                <FeedSection />
                <RoomSection />
            </div>
        </>
    );
};

export default Home;
