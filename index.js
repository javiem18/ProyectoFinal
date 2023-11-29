//slide fotos
document.addEventListener('DOMContentLoaded', function() {
    showSlides(); 
});
  
var slideIndex = 0;
  
function showSlides() {
    var slides = document.getElementsByClassName("foto");
  
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
  
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
  
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 1000000); 
}
  
function plusSlides(n) {
    showSlidesManually(slideIndex += n);
}
  
function showSlidesManually(n) {
    var slides = document.getElementsByClassName("foto");
  
    if (n > slides.length) {
        slideIndex = 1;
    }
  
    if (n < 1) {
        slideIndex = slides.length;
    }
  
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
  
    slides[slideIndex - 1].style.display = "block";
}

//sonido de arranque
var button = document.getElementById('Start');
var audio = document.getElementById('arranque');

button.addEventListener('click', function() {
    //parar el audio y volver a reproducirlo desde el inicio
    audio.pause();
    audio.currentTime = 0;
    // Reproducir el sonido
    audio.play();
});

//configurador
var button = document.getElementById('config');

button.addEventListener('click', function() {
  window.location.href = "config.html";
});
