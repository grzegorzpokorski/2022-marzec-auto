import 'bootstrap';
import { tns } from "./../../node_modules/tiny-slider/src/tiny-slider";

const galleryInit = () => {
	const sections = document.querySelectorAll('.gallery');

	sections.forEach(section => {
		const slider = section.querySelector('.hero-slider');
		const controls = section.querySelector('.hero-slider__controls');

		const heroSlider = tns({
			container: slider,
			controlsContainer: controls,
			mode: 'carousel',
			items: 1,
			slideBy: 'page',
			navPosition: 'bottom',
			mouseDrag: true,
			autoHeight: true,
			autoplay: false,
			autoplayHoverPause: true,
			autoplayButtonOutput: false,
			speed: 700,
		});
	});
}

if(document.querySelectorAll('.gallery')){
	galleryInit();
}