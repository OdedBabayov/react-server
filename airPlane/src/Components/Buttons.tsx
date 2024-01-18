interface Props {
  func: (str: string) => void;
}
function Buttons({ func }: Props) {
  return (
    <div>
      <button
        onClick={() => {
          func("visual");
        }}
      >
        visual
      </button>

      <button
        onClick={() => {
          func("text");
        }}
      >
        text
      </button>
    </div>
  );
}
export default Buttons;
