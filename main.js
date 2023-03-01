const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
circle.setAttribute("cx", "50");
circle.setAttribute("cy", "50");
circle.setAttribute("r", "20");
circle.setAttribute("fill", "blue");

svg.appendChild(circle);

document.body.appendChild(svg);

const xhr = new XMLHttpRequest();
xhr.open("GET", "./drawing.svg");
xhr.onload = function() {
  const svgString = xhr.responseText;
  const range = document.createRange();
  range.selectNode(document.body);
  const fragment = range.createContextualFragment(svgString);
  const svg = fragment.querySelector("svg");
  document.body.appendChild(svg);
  const signIn = document.querySelector('[data-click-handler="sign-in-click-handler"]');

  signIn.addEventListener("mouseover", function(event) {
    signIn.style.fill = "red";
  });
  signIn.addEventListener("mouseout", function(event) {
    signIn.style.fill = "black";
  });

  signIn.addEventListener("click", function(event) {
    alert("You have been signed in!");
  });

  const star = document.querySelector('[data-click-handler="star-click-handler"]');
  star.addEventListener("mouseover", function(event) {
    star.style.fill = "yellow";
  });
  star.addEventListener("mouseout", function(event) {
    star.style.fill = "black";
    });
  };
xhr.send();
