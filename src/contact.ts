import { divGenerator } from "./index";
import { contInfo } from "./index";
import { ContactForm } from "./index";

export default function loadContact() {
  const content = document.querySelector(".content") as HTMLDialogElement;
  content.innerHTML = "";

  const section = divGenerator("contact");
  content.appendChild(section);

  const infoCard = contInfo({
    title: "Contact details:",
    phoneNumber: "+11 2222 3333 444",
    email: "resto@gmail.com",
    location: "Italy - Rom",
  });

  const form = new ContactForm().build();
  section.append(infoCard, form);
}
