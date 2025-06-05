import HeroSection from './HeroSection';

function Homepage() {
  return (
    <>
      <HeroSection
        image="/logo/svg/bg1.svg"
        title={<>PIONEERING BLOCKCHAIN TECHNOLOGY<br/>AND THE WEB3 ECOSYSTEM</>}
        number={1}
        description="SRLabs brings together leading blockchain experts and builders, operating in the vibrant tech hubs of Asia: South Korea, Japan, Singapore, and Vietnam. We harness the potential of blockchain technology to build a decentralized global economy and a new era of the Internet (Web3)."
        titleColor='linear-gradient(90deg, #184C35 0%, #51B949 50%, #A8DCA4 100%)'
      />
      <HeroSection
        image="/logo/svg/bg2.svg"
        title={<>STRATEGIC PARTNERS AND GROWTH<br/>COMPANIONS</>}
        number={2}
        description="We are not just investors, but strategic partners who journey alongside founders in building and developing their ecosystems. SRLabs provides comprehensive support for portfolio companies, from deep blockchain expertise to an optimal growth environment. We are committed to wholeheartedly supporting the success of founders and driving the sustainable development of the Web3 ecosystem."
        titleColor='linear-gradient(90deg, #184C35 0%, #51B949 50%, #A8DCA4 100%)'
      />
      <HeroSection
        image="/logo/svg/bg3.svg"
        title={<>LEADING INNOVATION IN THE<br/>WEB3 ERA</>}
        number={3}
        description="In the ever-evolving Web3 landscape, SRLabs proactively learns, adapts, and pioneers innovation. We continuously research and stay abreast of the latest trends to lead the way, create sustainable value for partners, and contribute to shaping the future of Web3."
        titleColor='linear-gradient(90deg, #184C35 0%, #51B949 50%, #A8DCA4 100%)'
      />
    </>
  );
}

export default Homepage
