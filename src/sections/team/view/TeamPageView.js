import { useState } from "react";
import { m } from "framer-motion";
import AdvisorSection from "../component/AdvisorSection";
import TeamSection from "../component/TeamOverlay";
import OperationSection from "../component/OperationSection"

function TeamPageView() {
    const [showTeam, setShowTeam] = useState(false);

    return (
        <>
            <TeamSection onDone={() => setShowTeam(true)} />
            {showTeam && (
                <m.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 3, ease: [0.65, 0, 0.35, 1] }}
                >
                    <AdvisorSection />
                    <OperationSection />
                </m.div>
                )}
        </>
    );
}

export default TeamPageView;
