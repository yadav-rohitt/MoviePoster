
const movieImages = [
    'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg', 
    'https://image.tmdb.org/t/p/w500/tDexQyu6FWltcd0VhEDK7uib42f.jpg',
    'https://image.tmdb.org/t/p/w500/xRWht48C2V8XNfzvPehyClOvDni.jpg', 
    'https://image.tmdb.org/t/p/w500/vlTPQANjLYTebzFJM1G4KeON0cb.jpg', 
    'https://image.tmdb.org/t/p/w500/y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg', 
];


const slideshowElement = document.getElementById('slideshow');


let currentIndex = 0;


function changeImage() {
   
    slideshowElement.src = movieImages[currentIndex];

  
    currentIndex = (currentIndex + 1) % movieImages.length;
}


slideshowElement.src = movieImages[0];

setInterval(changeImage, 2000);
