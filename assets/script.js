// Variables
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
console.log(`Il y a ${slides.length} photos`);

let arrow_left = document.querySelector(".arrow_left");
let arrow_right = document.querySelector(".arrow_right");
let banner_img = document.querySelector(".banner-img");
let dot = document.querySelectorAll(".dot");
let paragraph = document.querySelector("#banner p");

let currentSlide = 0;
let totalslides = slides.length




// EventListeners du bouton Gauche
arrow_left.addEventListener("click", () => {
	currentSlide = (currentSlide - 1 + totalslides) % totalslides;

	changeSlide();
})

// EventListeners du bouton Droite
arrow_right.addEventListener("click", () => {
	currentSlide = (currentSlide + 1) % totalslides;

	changeSlide();
})


// Fonction de changement de photo, texte et class dot_selected
function changeSlide () {
	banner_img.src = './assets/images/slideshow/' + slides[currentSlide].image;
	paragraph.innerHTML = slides[currentSlide].tagLine;

	for (let i = 0; i < dot.length; i++) {
		if (i === currentSlide) {
			dot[i].classList.add("dot_selected");
		} else {
			dot[i].classList.remove("dot_selected");
		}
	}
	console.log(`Vous étes sur la photo ${currentSlide}`);
}

// Boucle clic dot carrousel
for (let i = 0; i < dot.length; i++) {
	dot[i].addEventListener("click", () => {
		currentSlide = i;
		changeSlide();
		console.log(`Vous étes sur la dot ${i}`);
	})
}

// Appel de la fonction
changeSlide();


