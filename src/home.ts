import { divGenerator } from "./index";
import Icon from "./images/knife-fork.svg";

export default function loadHome() {
  const content = document.querySelector(".content") as HTMLDivElement;
  const section = divGenerator("home");

  const img = document.createElement("img");
  img.src = Icon;

  const image = divGenerator("image");
  section.appendChild(image);

  const lineCon = divGenerator("line");
  image.appendChild(lineCon);

  const svg = divGenerator("svg");
  lineCon.appendChild(svg);
  svg.appendChild(img);

  const hero = document.createElement("h1");
  hero.textContent = "My Restaurant";
  lineCon.appendChild(hero);

  const headerText = divGenerator("header_txt");
  headerText.textContent = "Welcome to our amazing Restaurant!";
  image.appendChild(headerText);

  const pizzaImg = divGenerator("pizza_img");
  image.appendChild(pizzaImg);

  content.appendChild(section);
}
