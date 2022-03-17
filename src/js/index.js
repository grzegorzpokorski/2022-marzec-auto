import 'bootstrap';
import { tns } from "./../../node_modules/tiny-slider/src/tiny-slider";

const galleryInit = () => {
	const sections = document.querySelectorAll('.gallery');

	sections.forEach(section => {
		const slider = section.querySelector('.gallery__content');
		const controls = section.querySelector('.gallery__controls');

		const heroSlider = tns({
			container: slider,
			controls: false, //
			nav: false, //
			controlsContainer: controls,
			mode: 'carousel',
			// items: 1,
			// slideBy: 'page',
			navPosition: 'bottom',
			mouseDrag: true,
			autoHeight: true,
			autoplay: false,
			// autoplayHoverPause: true,
			autoplayButtonOutput: false,
			// speed: 700,
		});
	});
}

if(document.querySelectorAll('.gallery')){
	galleryInit();
}

// import 'glightbox/dist/js/glightbox';
// import GLightbox from 'glightbox';

// const lightbox = GLightbox({
//     touchNavigation: true,
//     loop: true,
//     autoplayVideos: true
// });