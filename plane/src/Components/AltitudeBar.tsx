interface Props {
  altitude: number;
}

function AltitudeBar({ altitude }: Props) {
  const offset = 45;
  const hight = 150; //amount of pixels of altitudeBar
  const lineStyle = {
    bottom: (altitude / 3000) * hight + offset + "px",
  };
  return (
    <div className="container">
      <div className="container-values">
        <span>3000</span>
        <span>2000</span>
        <span>1000</span>
        <span>0</span>
      </div>
      <div className="line" style={lineStyle}></div>
    </div>
  );
}
export default AltitudeBar;
