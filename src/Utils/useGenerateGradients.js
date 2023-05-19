import tinycolor from "tinycolor2";

export default function useGenerateGradients() {
  const grad = [];

  for (let i = 0; i < 30; i++) {
    const color1 = tinycolor.random().toString();

    // Generate a tint or shade of the base color
    const isTint = Math.random() >= 0.5; // Randomly determine whether to generate a tint or shade
    const variationAmount = Math.floor(Math.random() * 30) + 10; // Randomly choose the amount of variation
    const color2 = isTint
      ? tinycolor(color1).lighten(variationAmount).toString()
      : tinycolor(color1).darken(variationAmount).toString();

    const directions = ["to right", "to left", "to bottom", "to top"];
    const direction = directions[Math.floor(Math.random() * directions.length)];
    // Create the CSS linear gradient string
    const gradient = `linear-gradient(${direction}, ${color1}, ${color2})`;

    // Return the gradient
    grad.push(gradient);
  }

  return { grad }; //an array of gradients
}
