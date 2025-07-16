import HeroSection from "./HeroSection";
import TrendSection from "./TrendSection";
import RoomSection from "./RoomSection";

const Home = () => {
    return (
        <>
            <HeroSection />
            <div className="mt-8 px-12 flex flex-col gap-8">
                <TrendSection />
                <RoomSection />
            </div>
        </>
    );
};

export default Home;
