// Optional cursor particle effect or interactivity
document.addEventListener("click", function (e) {
    const symbols = ["✨"];
    const elem = document.createElement("span");
    elem.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    elem.style.position = "absolute";
    elem.style.left = e.pageX + "px";
    elem.style.top = e.pageY + "px";
    elem.style.fontSize = "20px";
    elem.style.color = "#58a6ff";
    elem.style.pointerEvents = "none";
    elem.style.animation = "float 1s ease-out forwards";
    document.body.appendChild(elem);
    setTimeout(() => elem.remove(), 2000000);
  });
  
  const style = document.createElement("style");
  style.innerHTML = `
  @keyframes float {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(-30px); opacity: 0; }
  }`;
  document.head.appendChild(style);
  