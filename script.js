$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Back-End Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Back-End Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});





const scriptURL = 'https://script.google.com/macros/s/AKfycbyjj8eQRSGyZcKoGmijcf9DQ-mi4nR03pt_VBB5JOnJR0Ka85BplF5doqkXgn-r1as6/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("Ms")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerText-"Message Sent Successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})



// GitHubCalendar(".calendar", "Virendrakumardwivedi");

// // or enable responsive functionality:
// GitHubCalendar(".calendar", "Virendrakumardwivedi", { responsive: true });

// // Use a proxy
// GitHubCalendar(".calendar", "Virendrakumardwivedi", {
//    proxy (Virendrakumardwivedi) {
//      return fetch(`https://your-proxy.com/github?user=${Virendrakumardwivedi}`)
//    }
// }).then(r => r.text())

