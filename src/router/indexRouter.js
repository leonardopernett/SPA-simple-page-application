import { Home, Post, error404 } from "../controller/indexController";
let content = document.getElementById("content");

export const router = async (route) => {
  content.innerHTML = "";
  switch (route) {
    case "#/":
      content.appendChild(Home());
      break;

    case "#/post":
      content.appendChild(await Post());
      break;

    default:
      content.appendChild(error404());
      break;
  }
};
