// class Slideshow {

//     constructor() {
//       this.initSlides();
//       this.initSlideshow();
//     }
  
//     // Set a `data-slide` index on each slide for easier slide control.
//     initSlides() {
//       this.container = $('[data-slideshow]');
//       this.slides = this.container.find('img');
//       this.slides.each((idx, slide) => $(slide).attr('data-slide', idx));
//     }
  
//     // Pseudo-preload images so the slideshow doesn't start before all the images
//     // are available.
//     initSlideshow() {
//       this.imagesLoaded = 0;
//       this.currentIndex = 0;
//       this.setNextSlide();
//       this.slides.each((idx, slide) => {
//         $('<img>').on('load', $.proxy(this.loadImage, this)).attr('src', $(slide).attr('src'));
//       });
//     }
  
//     // When one image has loaded, check to see if all images have loaded, and if
//     // so, start the slideshow.
//     loadImage() {
//       this.imagesLoaded++;
//       if (this.imagesLoaded >= this.slides.length) { this.playSlideshow() }
//     }
  
//     // Start the slideshow.
//     playSlideshow() {
//       this.slideshow = window.setInterval(() => { this.performSlide() }, 3500);
//     }
  
//     // 1. Previous slide is unset.
//     // 2. What was the next slide becomes the previous slide.
//     // 3. New index and appropriate next slide are set.
//     // 4. Fade out action.
//     performSlide() {
//       if (this.prevSlide) { this.prevSlide.removeClass('prev fade-out') }
  
//       this.nextSlide.removeClass('next');
//       this.prevSlide = this.nextSlide;
//       this.prevSlide.addClass('prev');
  
//       this.currentIndex++;
//       if (this.currentIndex >= this.slides.length) { this.currentIndex = 0 }
  
//       this.setNextSlide();
  
//       this.prevSlide.addClass('fade-out');
//     }
  
//     setNextSlide() {
//       this.nextSlide = this.container.find(`[data-slide="${this.currentIndex}"]`).first();
//       this.nextSlide.addClass('next');
//     }
  
//   }
  
//   $(document).ready(function() {
//     new Slideshow;
//   });
// Debounce
function debounce(a, b, c) {
  var d;
  return function () {
    var e = this,
      f = arguments;
    clearTimeout(d),
      (d = setTimeout(function () {
        (d = null), c || a.apply(e, f);
      }, b)),
      c && !d && a.apply(e, f);
  };
}

var SlideShow = (function () {
  var slider,
    slide,
    nextButton,
    prevButton,
    slideAmount,
    sliderWidth,
    title,
    subTitle,
    clickCounter,
    slideCounter;

  var _init = function () {
    slider = document.getElementsByClassName("slideShow__container")[0];
    slide = document.getElementsByClassName("slideShow__slide");
    slideAmount = slide.length;
    nextButton = document.getElementsByClassName("slideShow__next")[0];
    prevButton = document.getElementsByClassName("slideShow__prev")[0];
    title = document.getElementsByClassName("slideShow__slideTitle");
    subTitle = document.getElementsByClassName("slideShow__slideSubTitle");
    sliderWidth = parseInt(getComputedStyle(slider).width);
    clickCounter = 0;
    slideCounter = 0;

    _eventHandlers();
    _navButtons();
    _animateSlideIn(slideCounter);
  };

  var _eventHandlers = function () {
    nextButton.addEventListener("click", _slideNext, false);
    prevButton.addEventListener("click", _slidePrev, false);
    window.addEventListener("resize", _resize, false);
  };

  var _navButtons = function () {
    if (clickCounter === 0) {
      prevButton.classList.add("is-inactive");
    } else {
      prevButton.classList.remove("is-inactive");
    }
  };

  var _slideNext = function () {
    clickCounter++;
    slideCounter = clickCounter - 1;
    if (clickCounter >= slideAmount) {
      clickCounter = 0;
      slideCounter = slideAmount - 1;
    }
    var tl = new TimelineLite();
    tl.add(_animateSlideOut(slideCounter))
      .to(slider, 0.9, { x: -clickCounter * sliderWidth, ease: Power2.easeOut })
      .add(_animateSlideIn(clickCounter));
    _navButtons();
  };

  var _slidePrev = function () {
    if (clickCounter > 0) {
      clickCounter--;

      // _getPreviousSlide(clickCounter +1)
      var tl = new TimelineLite();
      tl.add(_animateSlideOut(clickCounter + 1))
        .to(
          slider,
          0.9,
          { x: "+=" + sliderWidth, ease: Power2.easeOut },
          "-=0.2"
        )
        .add(_animateSlideIn(clickCounter));
    }
    _navButtons();
  };

  var _animateSlideIn = function (index) {
    var currentSlide = slide[index];
    var title = currentSlide.children[1].children[0];
    var subTitle = currentSlide.children[1].children[1];
    var image = currentSlide.children[0];

    var splitTitle = new SplitText(title);
    var revertTitle = function () {
      splitTitle.revert();
    };

    TweenLite.set(title, { perspective: 400 });

    var tl = new TimelineLite({ onComplete: revertTitle });
    tl.set(title, { opacity: 1 })
      .staggerFrom(
        splitTitle.chars,
        0.8,
        {
          opacity: 0,
          scale: 0,
          y: 80,
          rotationX: 180,
          transformOrigin: "0% 50% -50",
          ease: Back.easeOut
        },
        0.03
      )
      .fromTo(
        subTitle,
        0.6,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.3"
      )
      .to(image, 0.4, { scale: 1, ease: Power2.easeOut }, "-=0.6");
    return tl;
  };

  var _animateSlideOut = function (index) {
    var currentSlide = slide[index];
    var title = currentSlide.children[1].children[0];
    var subTitle = currentSlide.children[1].children[1];
    var image = currentSlide.children[0];

    var tl = new TimelineLite();
    tl.to(title, 0.3, { opacity: 0 })
      .to(subTitle, 0.3, { y: 50, opacity: 0 }, "-=0.3")
      .to(image, 0.4, { scale: 0.8, ease: Power2.easeIn }, "-=0.3");
    return tl;
  };

  var _resize = debounce(function () {
    sliderWidth = parseInt(getComputedStyle(slider).width);
    sliderOffset = sliderWidth * clickCounter;
    slider.style.transform = "matrix(1, 0, 0, 1, -" + sliderOffset + ", 0)";
  }, 50);

  return {
    init: _init
  };
})();

SlideShow.init();
