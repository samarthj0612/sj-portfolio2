var i = 1;
setInterval(function () {
  if (i == 100) {
    var cover = gsap.timeline();
    cover
      .to("#cover #content", {
        opacity: 0,
        duration: 1.5,
      })
      .to("#band", {
        y: "-100%",
        stagger: 0.15,
      })
      .to("#cover", {
        y: "-100vh",
      })
      .to("#nav", {
        y: "30px",
        opacity: 1,
        duration: 0.5,
      });
  } else {
    document.querySelector("#cover #content h1").textContent = i;
    i++;
  }
}, 30);

$(".text1").textillate({
  loop: true,
  initialDelay: 2600,
  minDisplayTime: 3000,
  in: {
    effect: "fadeInUp",
    delayScale: 1,
    delay: 60,
    callback: function () {},
  },
  out: {
    effect: "fadeOut",
    delayScale: 1,
    delay: 80,
    reverse: true,
    callback: function () {},
  },
});

document.querySelector("#main1").addEventListener("mousemove", function (dets) {
  document.querySelector("#cursor").style.top = `${dets.clientY}px`;
  document.querySelector("#cursor").style.left = `${dets.clientX}px`;
  document.querySelector("#cursor").style.height = "80px";
  document.querySelector("#cursor").style.width = "80px";
  document.querySelector("#cursor").style.display = "initial";
});

document.querySelector("#main1").addEventListener("mouseout", function (dets) {
  document.querySelector("#cursor").style.top = `${dets.clientY}px`;
  document.querySelector("#cursor").style.left = `${dets.clientX}px`;
  document.querySelector("#cursor").style.height = "20px";
  document.querySelector("#cursor").style.width = "20px";
  document.querySelector("#cursor").style.display = "none";
});

gsap.from("#main2 #content", {
  scrollTrigger: {
    trigger: "#main2",
    start: "center center",
    end: "80% 20%",
    scrub: 2,
    pin: true,
  },
  backgroundPositionX: "40%",
});

gsap.from("#main2 #skill li", {
  scrollTrigger: {
    trigger: "#main2",
    start: "center center",
  },
  stagger: 0.3,
  opacity: 0,
  x: -50,
});

let nav_var = document.querySelector("#nav");
window.addEventListener("scroll", change_scroll);

function change_scroll() {
  if (window.pageYOffset > 100) 
    nav_var.classList.add("shadow");
  else
    nav_var.classList.remove("shadow");
}

gsap.to("#skillBand div", {
  scrollTrigger: {
    trigger: "#skillBand",
    start: "center center",
    scrub: 2,
    pin: true,
  },
  x: "-150%",
});
