jQuery(document).ready(function(){
	bwTestimonialSliderControls(); //functionality for the left and right buttons
	bwTestimonialSliderSlideHeight(); //keep slide block as high as highest slide at current block width
});

function bwTestimonialSliderControls(){

	//get testimonial sliders on page
	const testimonialSliders = jQuery(".bw-ts--wrapper");

	//if there are no sliders, do nothing
	if (testimonialSliders.length == 0){
		return;
	}

	testimonialSliders.each(function() {

		let leftControl = jQuery(this).find(".bw-ts--left button.bw-ts--control").first();
		let rightControl = jQuery(this).find(".bw-ts--right button.bw-ts--control").first();
		let slides = jQuery(this).find("blockquote.wp-block-quote");

		//if there is no more than one slide, return
		if(slides.length <= 1){
			return;
		}

		//make first slide active

		slides.first().addClass("bw-ts--active");

		leftControl.click(function() {

			//if first slide is active, make last slide active
			if (slides.first().hasClass("bw-ts--active")){
				slides.first().removeClass("bw-ts--active");
				slides.eq(slides.length - 1).addClass("bw-ts--active");
			} else {
				//else, make slide before previous one active
				for ( let currSlide = 1; currSlide < slides.length; currSlide++ ){
					if(slides.eq(currSlide).hasClass("bw-ts--active")){
						slides.eq(currSlide).removeClass("bw-ts--active");
						slides.eq(currSlide - 1).addClass("bw-ts--active");
						break;
					}
				}
			}
		});

		rightControl.click(function() {

			//if last slide is active, make first slide active
			if (slides.eq(slides.length - 1).hasClass("bw-ts--active")){
				slides.eq(slides.length - 1).removeClass("bw-ts--active");
				slides.first().addClass("bw-ts--active");
			} else {
				//else, make slide before after one active
				for ( let currSlide = 0; currSlide < (slides.length - 1); currSlide++ ){
					if(slides.eq(currSlide).hasClass("bw-ts--active")){
						slides.eq(currSlide).removeClass("bw-ts--active");
						slides.eq(currSlide + 1).addClass("bw-ts--active");
						break;
					}
				}
			}
		});
	});
}

function bwTestimonialSliderSlideHeight(){

	//get testimonial sliders on page
	const testimonialSliders = jQuery(".bw-ts--wrapper");

	//if there are no sliders, do nothing
	if (testimonialSliders.length == 0){
		return;
	}

	testimonialSliders.each( function(){

		//get slides container
		let slidesContainer = jQuery(this).find(".bw-ts--slides-container:first");

		//get slides
		let slides = jQuery(this).find("blockquote.wp-block-quote");

		let bwTestimonialSliderUpdateHeight = () => {

			//loop through slides, get highest height
			let highestSlide = Math.max(...slides.map((idx, currSlide) => {return jQuery(currSlide).height()}).get())

			//set block height to height of highest slide
			slidesContainer.height(highestSlide);


		}

		//run updating function once on load and then when window resizes
		bwTestimonialSliderUpdateHeight();
		jQuery(window).resize(bwTestimonialSliderUpdateHeight);

	});

}
