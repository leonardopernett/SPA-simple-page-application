import views from "../views/home.html";
import post from "../views/post.html";
import error from '../views/404.html';


async function getPost(){
  const res= await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return data;
}


export const Home = () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = views;
  const btn = divElement.querySelector("#btn");
  btn.addEventListener("click", () => {
    alert("click");
  });
  return divElement;
};

export const Post = async () => {
  const divElement = document.createElement('div')
  divElement.innerHTML=post;
  const list = divElement.querySelector('#post')
  const posts = await getPost();
  let total = divElement.querySelector('#total')
  total.innerHTML = posts.length
  posts.forEach(post => {
       list.innerHTML += `
         <li class="list-group-item bg-dark">
          <h3>${post.title}</h3>
          <p>${post.body}</p>
         </li>
       `
         
      });
  return divElement;
};

export const error404 = ()=>{
  const divElement = document.createElement('div')
  divElement.innerHTML=error;
  return divElement;
}
