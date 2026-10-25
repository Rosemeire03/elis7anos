(function () {
  var body = document.body;
  var envelope = document.getElementById("envelope");
  var invite = document.getElementById("invite");
  var btn = document.getElementById("openInvite");

  function burst() {
    var icons = ["💖", "⭐", "🎵", "💕", "✨", "⚽"];
    for (var i = 0; i < 22; i++) {
      var el = document.createElement("span");
      el.className = "float-heart";
      el.textContent = icons[i % icons.length];
      el.style.left = Math.random() * 100 + "vw";
      el.style.fontSize = 18 + Math.random() * 22 + "px";
      el.style.animationDuration = 2.4 + Math.random() * 2.2 + "s";
      el.style.animationDelay = Math.random() * 0.6 + "s";
      document.body.appendChild(el);
      setTimeout(function (e) { e.remove(); }, 5500, el);
    }
  }

  function setupReveal() {
    var items = invite.querySelectorAll(".section");
    items.forEach(function (s) { s.classList.add("reveal"); });
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (s) { s.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (s) { io.observe(s); });
  }

  function openInvite() {
    envelope.classList.add("opening");
    invite.setAttribute("aria-hidden", "false");
    body.classList.remove("locked");
    window.scrollTo(0, 0);
    burst();
    setTimeout(function () { envelope.style.display = "none"; }, 1000);
  }

  setupReveal();
  btn.addEventListener("click", openInvite);
})();
