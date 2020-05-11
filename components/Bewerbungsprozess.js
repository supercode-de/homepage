import { SuperLogo, WaitIcon, BeratungIcon, NetzwerkIcon, FinanzierungIcon, MethodikIcon, TeamIcon, ZertifikatIcon, ZielIcon } from "super-library";

const Bewerbungsprozess = () => {
    return (
        <div id="finanzierung">
            <BeratungIcon height={256} />
            <FinanzierungIcon height={256} />
            <MethodikIcon height={256} />
            <SuperLogo height={256} />
            <TeamIcon height={256} />
            <WaitIcon height={256} />
            {/* <NetzwerkIcon height={256} /> // doesnt work */}
            {/* <ZertifikatIcon height={256} /> // doesnt work */}
            {/* <zielIcon height={256} /> // doesnt work */}
        </div>
    );
}

export default Bewerbungsprozess;