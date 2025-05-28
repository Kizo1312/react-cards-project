import { useState } from "react";
import "./colorBoxes.css";
function ColorBoxes() {
  const [colors, setColors] = useState(["red", "green", "blue"]);
  const getRandomColor = () =>
    "#" +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0");

  function handleAddBox() {
    let newColor = getRandomColor();

    const newColors = [...colors, newColor];
    setColors(newColors);
  }
  function shuffleArray(arr) {
    const newColors = [...arr];

    for (let i = newColors.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newColors[i], newColors[j]] = [newColors[j], newColors[i]];
    }
    return newColors;
  }
  function handleShuffle() {
    setColors(shuffleArray(colors));
  }

  function handleRemove() {
    let newArr = [...colors];
    newArr.pop();
    console.log(newArr);
    setColors(newArr);
  }
  return (
    <div>
      <ul>
        {colors.map((color, index) => {
          return (
            <div key={index}
              style={{
                backgroundColor: color,
                width: "100px",
                height: "100px",
                borderStyle: "solid",
                borderWidth: "5px",
              }}
            >
              lol
            </div>
          );
        })}
      </ul>
      <button onClick={handleAddBox}>Add box</button>
      <button onClick={handleShuffle}>Shuffle box</button>
      <button onClick={handleRemove}>remove last</button>
    </div>
  );
}
export default ColorBoxes;
