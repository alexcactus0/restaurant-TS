import { divGenerator } from "./index";
import { item } from "./index";

import mahPizza from "./images/maPizza.jpg";
import quaPizza from "./images/quaPizza.jpg";
import proPizza from "./images/proPizza.jpg";
import diavPizza from "./images/diavPizza.jpg";
import caPizza from "./images/caPizza.jpg";
import fungiPizza from "./images/fungiPizza.jpg";
import napoPizza from "./images/napoPizza.jpg";
import trufflePizza from "./images/trufflePizza.jpg";

export default function loadMenu() {
  const content = document.querySelector(".content") as HTMLDivElement;
  content.innerHTML = "";

  const section = divGenerator("menu");
  content.appendChild(section);

  const maPizza = item({
    title: "Margherita Pizza",
    image: mahPizza,
    text: "This is a very delicious Pizza",
    className: "order-btn",
  });
  const quahPizza = item({
    title: "Quattro Formaggi",
    image: quaPizza,
    text: "This is also good",
    className: "order-btn",
  });
  const prohPizza = item({
    title: "Prosciutto e Rucola",
    image: proPizza,
    text: "Try this one better",
    className: "order-btn",
  });
  const diavhPizza = item({
    title: "Diavola",
    image: diavPizza,
    text: "This is so good twin",
    className: "order-btn",
  });
  const cahPizza = item({
    title: "Capricciosa",
    image: caPizza,
    text: "This is better gang twin trust",
    className: "order-btn",
  });
  const fungihPizza = item({
    title: "Funghi Porcini",
    image: fungiPizza,
    text: "This is a gang bang vro",
    className: "order-btn",
  });
  const napohPizza = item({
    title: "Napoli",
    image: napoPizza,
    text: "This was cooked from Napolion himself gang",
    className: "order-btn",
  });
  const trufflehPizza = item({
    title: "Tartufata",
    image: trufflePizza,
    text: "This is a lot better js sybau",
    className: "order-btn",
  });

  section.append(
    maPizza,
    quahPizza,
    prohPizza,
    diavhPizza,
    cahPizza,
    fungihPizza,
    napohPizza,
    trufflehPizza,
  );
}
