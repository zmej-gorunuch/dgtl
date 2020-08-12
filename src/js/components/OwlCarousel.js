import '../../libs/owl-carousel/owl.carousel';
export default function OwlCarousel() {
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    navText: [],
    // animateOut: 'fadeOut',
    // animateIn: 'fadeIn',
    smartSpeed: 450,
    // stagePadding: function () {
    // 	if (windowWidth > 1200) { // need windowWidth
    // 		return 0; //240
    // 	} else {
    // 		return 0;
    // 	}
    // },
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  /*
		<!-- Carousel start -->
			< div class = "owl-carousel owl-theme" >
				<div class = "item" > < h4 > 1 < /h4></div>
				<div class = "item" > < h4 > 2 < /h4></div>
				<div class = "item" > < h4 > 3 < /h4></div>
				<div class = "item" > < h4 > 4 < /h4></div>
				<div class = "item" > < h4 > 5 < /h4></div>
				<div class = "item" > < h4 > 6 < /h4></div>
				<div class = "item" > < h4 > 7 < /h4></div>
				<div class = "item" > < h4 > 8 < /h4></div>
			</div>
		<!-- Carousel end -->
		*/
}
