const slides = [
	{
		"image":"/assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"/assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"/assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"/assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
console.log(slides.length);

let arrow_left = document.querySelector(".arrow_left");
let arrow_right = document.querySelector(".arrow_right");
let banner_img = document.querySelector(".banner-img");
let dot = document.querySelectorAll(".dot");
let p = document.querySelector("#banner p");

let currentSlide = 0;
let totalslides = slides.length


arrow_left.addEventListener("click", () => {
	currentSlide = (currentSlide - 1 + totalslides) % totalslides;
})

arrow_right.addEventListener("click", () => {
	currentSlide = (currentSlide + 1) % totalslides;
})




