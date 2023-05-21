
      var swiper = new Swiper(".circle-swiper-main", {
        slidesPerView: 9,
        spaceBetween: 15,
        navigation: {
          nextEl: ".circle-swiper-main .swiper-button-next",
          prevEl: ".circle-swiper-main .swiper-button-prev",
        },
		breakpoints: {
		320: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 15,
          },
		  1199:{
		   slidesPerView: 9,
            spaceBetween: 15,
		  },
        },
      });
	  
	   var swiper = new Swiper(".square-swiper-main", {
        slidesPerView: 4,
        spaceBetween: 15,
        navigation: {
          nextEl: ".square-swiper-main .swiper-button-next",
          prevEl: ".square-swiper-main .swiper-button-prev",
        },
		breakpoints: {
		320: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView:3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
		
        },
      });
	    var swiper = new Swiper(".square-swiper-main2", {
        slidesPerView: 9,
        spaceBetween: 15,
        navigation: {
          nextEl: ".square-swiper-main2 .swiper-button-next",
          prevEl: ".square-swiper-main2 .swiper-button-prev",
        },
		breakpoints: {
		  320: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 15,
          },
		      1199:{
		   slidesPerView: 9,
            spaceBetween: 15,
		  },
        },
      });

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
