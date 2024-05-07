'use strict';
$(document).ready(function () {

  //////navbar hiden on scrool down and reveal in scrool up
  let prevScrollpos = window.pageYOffset;
  const navFunction = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector(".section__1__nav").style.top = "0";
    } else {
      document.querySelector(".section__1__nav").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
  };

  ///progress bar scroll
  // When the user scrolls the page, execute myFunction

  const progressBar = document.getElementById("progressbar");
  progressBar.style.height = 1 + "%";

  const scroolFunction = function () {
    const scroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = (scroll / height) * 100;

    if (scrolled <= 1) {
      progressBar.style.height = 1 + "%";
    } else if (scrolled >= 2 && scrolled <= 99.9) {
      progressBar.style.height = scrolled + "%";
      progressBar.classList.remove("glow");
    } else if (scrolled === 100) {
      progressBar.style.height = scrolled + "%";
      // 		Do something when reached 100% scroll
      progressBar.classList.add("glow");
    }
  };

  ///increasing numbers function
  let a = 0;
  const increasingNumbers = function () {
    let oTop =
      $(".section__8__cardsContainer ").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $(".counter-value").each(function () {
        let $this = $(this),
          countTo = $this.attr("data-count");
        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },

          {
            duration: 2000,
            easing: "swing",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
              //alert('finished');
            },
          }
        );
      });
      a = 1;
    }
  };

  //calling  functions at the same time
  window.onscroll = function () {
    scroolFunction();
    navFunction();
    increasingNumbers();
  };

  /////click on navigation and scrool to that view

  const sectionhome=document.querySelector('.section__2');
  const sectionService=document.querySelector('.section__3');
  const sectionContact=document.querySelector('.section__9');
  const sectionProducts=document.querySelector('.section__6');
  const sectionAdvise=document.querySelector('.section__5');
  
  $('#home').click(function (e) { 
    e.preventDefault();
    sectionhome.scrollIntoView({
        behavior:'smooth'
    })
  });
  
  $('#service').click(function (e) { 
    e.preventDefault();
    sectionService.scrollIntoView({
        behavior:'smooth'
    })
  });
  
  $('#contact').click(function (e) { 
    e.preventDefault();
    sectionContact.scrollIntoView({
        behavior:'smooth'
    })
  });
  
  $('#products').click(function (e) { 
    e.preventDefault();
    sectionProducts.scrollIntoView({
        behavior:'smooth'
    })
  });
  
  $('#section__2__btn').click(function (e) { 
    e.preventDefault();
    sectionService.scrollIntoView({
        behavior:'smooth'
    })
  });
  
  $('#section__3__btn').click(function (e) { 
    e.preventDefault();
    sectionAdvise.scrollIntoView({
        behavior:'smooth'
    })
  });
  
  $('#section__5__btn').click(function (e) { 
    e.preventDefault();
    sectionContact.scrollIntoView({
        behavior:'smooth'
    })
  });




  //revealing animation with scrool

  new WOW().init();


  //shamsi date
  const option={
    weekday:'long',
    year:'numeric',
    month:'long',
    day:'numeric'
  }
  const revealTIme=new Date();
  document.querySelector('.dateAndClock').textContent=new Intl.DateTimeFormat('fa-IR',option).format(revealTIme)


});
