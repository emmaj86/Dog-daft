$(".carousel").carousel({
  interval: 2000,
});

// Wrap every letter in a span
var textWrapper = document.querySelector(".ml2");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>",
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml2 .letter",
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70 * i,
  })
  .add({
    targets: ".ml2",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

//tracking whatsapp and messenger clicks
document.addEventListener("click", function (e) {
  const link = e.target.closest("a[data-track]");
  if (!link) return;

  const method = link.getAttribute("data-track");

  if (typeof gtag === "function") {
    gtag("event", "contact_click", {
      contact_method: method,
      page_location: window.location.href,
    });
  }
});
