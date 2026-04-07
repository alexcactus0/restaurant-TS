import "./style/style.css";
import "./style/menu.css";
import "./style/contact.css";

import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function clearContent() {
  const el = document.querySelector(".content") as HTMLElement;
  el.innerHTML = "";
}

function switchTab(loadFunction: () => unknown): void {
  clearContent();
  loadFunction();
}

document.addEventListener("DOMContentLoaded", () => {
  loadHome();

  const homeBtn = document.querySelector(".homeBtn") as HTMLButtonElement;
  homeBtn.addEventListener("click", () => switchTab(loadHome));

  const menuBtn = document.querySelector(".menuBtn") as HTMLButtonElement;
  menuBtn.addEventListener("click", () => switchTab(loadMenu));

  const contact = document.querySelector(".contactBtn") as HTMLButtonElement;
  contact.addEventListener("click", () => switchTab(loadContact));
});

export function divGenerator(className?: string) {
  const el = document.createElement("div");

  if (className) el.classList.add(className);

  return el;
}

type itemCard = {
  title: string;
  image: string;
  text: string;
  className?: string;
};

export function item({ title, image, text, className }: itemCard) {
  const card = divGenerator("menu-item");

  const cardTitle = document.createElement("h2");
  cardTitle.textContent = title;

  const imgCon = divGenerator("imgCon");
  const cardImage = document.createElement("img");
  cardImage.src = image;
  imgCon.appendChild(cardImage);

  const cardText = document.createElement("p");
  cardText.textContent = text;

  const orderBtn = document.createElement("button");
  orderBtn.textContent = "Order";
  if (className) orderBtn.classList.add(className);

  card.append(cardTitle, imgCon, cardText, orderBtn);
  return card;
}

type contactCard = {
  title: string;
  phoneNumber: string;
  email: string;
  location: string;
};

export function contInfo({ title, phoneNumber, email, location }: contactCard) {
  const infoCon = divGenerator("info-card");

  const titleCon = divGenerator("title");
  const titleEl = document.createElement("h2");
  titleEl.textContent = title;
  titleCon.appendChild(titleEl);

  const phoneNumCon = divGenerator("number");
  const phoneNumSvg = divGenerator("nsvg");
  phoneNumCon.appendChild(phoneNumSvg);

  const numText = document.createElement("span");
  numText.textContent = String(phoneNumber);
  phoneNumCon.appendChild(numText);

  const emailCon = divGenerator("email");
  const emailSvg = divGenerator("esvg");
  emailCon.appendChild(emailSvg);

  const emailText = document.createElement("span");
  emailText.textContent = email;
  emailCon.appendChild(emailText);

  const locationCon = divGenerator("location");
  const locationSvg = divGenerator("lsvg");
  const wrapper = divGenerator("lwrapper");
  const locationText = document.createElement("span");
  locationText.textContent = location;
  wrapper.append(locationSvg, locationText);
  const locationImg = divGenerator("loc-img");
  locationCon.append(wrapper, locationImg);

  infoCon.append(titleCon, phoneNumCon, emailCon, locationCon);
  return infoCon;
}

interface ContactFormOptions {
  labelText: string;
  type?: string;
  name?: string;
  placeholder: string;
}

export class ContactForm {
  form: HTMLFormElement;
  constructor() {
    this.form = document.createElement("form");
    this.form.classList.add("contact-form");
  }

  private createInput({
    labelText,
    type,
    name,
    placeholder,
  }: ContactFormOptions) {
    const group = divGenerator("input-group");
    const label = document.createElement("label");
    label.textContent = labelText;

    const input = document.createElement("input");
    if (type) input.type = type;
    if (name) input.name = name;
    input.placeholder = placeholder;
    input.required = true;

    group.append(label, input);
    return group;
  }

  private createTextArea({
    labelText,
    name,
    placeholder,
  }: ContactFormOptions): HTMLElement {
    const group = divGenerator("text-group");
    const label = document.createElement("label");
    label.textContent = labelText;

    const textarea = document.createElement("textarea");
    if (name) textarea.name = name;
    textarea.placeholder = placeholder;
    textarea.rows = 4;
    textarea.required = true;

    group.append(label, textarea);
    return group;
  }

  private createButton(): HTMLButtonElement {
    const btn = document.createElement("button");
    btn.type = "submit";
    btn.classList.add("send-btn");
    btn.textContent = "Send";

    return btn;
  }

  build() {
    const title = document.createElement("h2");
    title.textContent = "Contact Us";

    const fullName = this.createInput({
      labelText: "Full Name",
      type: "text",
      name: "fullname",
      placeholder: "Name..",
    });
    const email = this.createInput({
      labelText: "Email",
      type: "email",
      name: "email",
      placeholder: "example@gmail.com",
    });
    const number = this.createInput({
      labelText: "Number",
      type: "number",
      name: "number",
      placeholder: "+111 2222 333",
    });
    const textarea = this.createTextArea({
      labelText: "Message",
      name: "message",
      placeholder: "How can we help you?",
    });
    const sendBtn = this.createButton();

    this.form.addEventListener("submit", (e: SubmitEvent) => {
      e.preventDefault();

      const emailEl = this.form.querySelector(
        "input[name='email']",
      ) as HTMLFormElement;
      const emailIn = emailEl.value.trim();
      const numEl = document.querySelector(
        "input[name='number']",
      ) as HTMLInputElement;
      const numIn = numEl.value.trim();
      const textEl = document.querySelector(
        "textarea[name='message']",
      ) as HTMLTextAreaElement;
      const textIn = textEl.value.trim();

      if ((emailIn !== "" || numIn !== "") && textIn !== "") {
        alert("We got your Message!");
        this.form.reset();
      } else {
        alert(
          "Please write a message and give us either your email or number so we can reach out!",
        );
      }
    });

    this.form.append(title, fullName, email, number, textarea, sendBtn);
    return this.form;
  }
}
