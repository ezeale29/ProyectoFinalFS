let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("carrouselContainer__Slides");
  let puntos = document.getElementsByClassName("punto");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < puntos.length; i++) {
    puntos[i].className = puntos[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  puntos[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // timer que rota los sliders automáticamente cada 4 segundos.
}