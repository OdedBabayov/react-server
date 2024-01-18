import Adi from "./Adi";
import AltitudeBar from "./AltitudeBar";
import His from "./His";

interface Props {
  altitude: number;
  his: number;
  adi: number;
}
function Visual({ altitude, his, adi }: Props) {
  return (
    <div className="visualContainer">
      <AltitudeBar altitude={altitude} />
      <His his={his} />
      <Adi ADI={adi} />
    </div>
  );
}
export default Visual;
