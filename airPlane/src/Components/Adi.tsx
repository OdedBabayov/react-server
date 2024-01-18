interface Props {
  ADI: number;
}
function Adi({ ADI }: Props) {
  const green = -100;
  const blue = 100;
  return (
    <>
      {ADI === blue ? (
        <span className="circle-blue"></span>
      ) : ADI === green ? (
        <span className="circle-green"></span>
      ) : (
        <span className="circle-mix"></span>
      )}
    </>
  );
}
export default Adi;
