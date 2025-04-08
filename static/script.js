function typeEffect(element, text, speed, callback) {
    element.innerText = ""; // limpa
    let i = 0;
  
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i) === " " ? "&nbsp;" : text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else if (callback) {
        callback();
      }
    }
  
    type();
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("titulo-principal");
    const subtitle = document.getElementById("subtitulo");
  
    const titleText = "Welcome!";
    const subtitleText = "Nice to meet you, I'm Eduardo";
  
    typeEffect(title, titleText, 100, () => {
      setTimeout(() => {
        typeEffect(subtitle, subtitleText, 100);
      }, 300);
    });
  });
  