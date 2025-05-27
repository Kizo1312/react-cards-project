import add, { multiply, substract, divide } from "../calculator";
function Calculator() {
  return (
    <div>
      <ul>
        <li>{add(10, 5)}</li>
        <li>{multiply(10, 5)}</li>
        <li>{divide(10, 5)}</li>
        <li>{substract(10, 5)}</li>
      </ul>
    </div>
  );
}
export default Calculator;
