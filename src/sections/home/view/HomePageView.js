
import HomeSection from "src/sections/home/component/HomeSection";
import AboutSection from "src/sections/home/component/AboutSection"
import OurServiceSection from "../component/ServiceSection";
import TrackRecordSection from "../component/TrackerRecordSection";
import KoreaInsiderSection from "../component/KoreaWeb3Section";
import PartnersSection from "../component/PartnerSection";

function HomePageView() {
    return (
        

            <>
            <HomeSection />
            <AboutSection />
            <OurServiceSection />
            <TrackRecordSection />
            <KoreaInsiderSection />
            <PartnersSection />
            </>
    )
}

export default HomePageView;
