import { useState } from "react";
import { m } from "framer-motion";
import AboutUs from "src/sections/about-us/component/AboutOverlay";
import AboutSectios from "../component/AboutTitle";
import MapSection from "../component/MapSection"

function AboutUsPageView(){
    const [showTeam, setShowTeam] = useState(false);
    return (
        <>
            <AboutUs onDone={() => setShowTeam(true)}  />
            {showTeam && (
                <m.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 3, ease: [0.65, 0, 0.35, 1] }}
                >
                    <AboutSectios />
                    <MapSection src="/logo/svg/map.svg" alt="map" />
                </m.div>
            )}
        </>
    )
}

export default AboutUsPageView