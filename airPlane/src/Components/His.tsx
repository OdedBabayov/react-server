interface Props {
  his: number;
}
function His({ his }: Props) {
  const rotate = {
    transform: "rotate(" + his + "deg)", //rotate the circle and all the elements inside
  };
  const reRotate = {
    transform: "rotate(-" + his + "deg)", //reverse the rotation of the elemnts inside the circle. The elements need to remain vertical
  };

  return (
    <div className="circle" style={rotate}>
      <span className="top" style={reRotate}>
        0
      </span>
      <span className="right" style={reRotate}>
        180
      </span>
      <span className="bottom" style={reRotate}>
        90
      </span>
      <span className="left" style={reRotate}>
        270
      </span>
      <span className="arrow" style={reRotate}></span>
    </div>
  );
}
export default His;
