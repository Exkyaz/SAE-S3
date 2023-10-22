var MyH1Access = document.querySelectorAll(".MyAccess .MyCarouselAccess .MyDivNavLinks .MyH1Access");
var MySlidesAccess = document.querySelectorAll(".MyCarouselAccess .MySlidesAccess img");
var MyOverlaysAccess = document.querySelectorAll(".MyCarouselAccess .bar");
var maxZIndex = MyH1Access.length;

var easeInOutQuart = "cubic-bezier(0.77, 0, 0.175, 1)";
MySlidesAccess[0].classList.add("active");
MyH1Access[0].classList.add("active");
MyH1Access.forEach(function (navLink, activeIndex) {
    MyOverlaysAccess[activeIndex].style.zIndex = "".concat(MyH1Access.length -
        activeIndex);
    
    navLink.addEventListener("mouseover", function () {
        // nav-link
        MyH1Access.forEach(function (navLink) { return navLink.classList.remove("active"); });
        navLink.classList.add("active");
        
        // slide
        var currentSlide = document.querySelector(".MyCarouselAccess .MySlidesAccess img.active");
        var slideFadeOut = currentSlide.animate([
            { transform: "translateX(0)", opacity: 1 },
            { transform: "translateX(5%)", opacity: 0 }
        ], {
            duration: 600,
            easing: "ease-in",
            fill: "forwards"
        });
        slideFadeOut.onfinish = navLink.addEventListener("mouseout", function () {
            MySlidesAccess.forEach(function (slide) { return slide.classList.remove("active"); });
            var activeSlide = MySlidesAccess[activeIndex];
            activeSlide.classList.add("active");
            activeSlide.animate([
                {
                    transform: "translateX(-5%)",
                    opacity: 0
                },
                {
                    transform: "translateX(0)",
                    opacity: 1
                }
            ], { duration: 600, easing: "ease-out", fill: "forwards" });
        });
        // overlay
        maxZIndex += 1;
        var activeOverlay = MyOverlaysAccess[activeIndex];
        activeOverlay.style.zIndex = "".concat(maxZIndex);
        activeOverlay.animate([{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }], { duration: 1200, fill: "forwards", easing: easeInOutQuart });
    });
});
