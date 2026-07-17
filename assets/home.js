/* ============================================================
   PILAR GARIJO — Home
   Traduce el CONTENIDO de la home al recibir `pg:langchange`
   (el menú, el modal y el idioma los gobierna assets/site-header.js).
   ============================================================ */
(function () {
  "use strict";

  /* ---------- i18n del contenido ---------- */
  var EN = {
    "hero.eyebrow": "Chiromassage/Osteopathy with our own method since 1994",
    "hero.h1a": "Tell us what's wrong",
    "hero.h1b": "and we'll solve it together",
    "hero.lead": "We've helped over 25,000 people like you.<br>At our centres you'll find the quality care you need to live pain-free.",
    "hero.cta1": "Book on WhatsApp",
    "hero.cta2": "See our centres",
    "hero.stat3a": "Centres across Madrid, always close to you.",
    "hero.stat3b": "Choose yours and let's begin.",
    "hero.badge.t": "Our own method",
    "hero.badge.s": "Manual therapies of proven success",
    "academia.eyebrow": "Quiroaxial School",
    "academia.text": "At our <b>Quiroaxial School of the Pilar Garijo Method</b> we train professionals in the sector in our techniques.",
    "academia.cta": "Are you a professional? Click here",
    "centros.eyebrow": "Where we are",
    "centros.h2a": "Three centres in",
    "centros.sub": "The same method and the same care at each of our centres. Choose the one that suits you best.",
    "area.vallecas": "Peña Ambote",
    "area.lopez": "El Viso",
    "area.estrella": "Retiro · Estrella metro",
    "since.1994": "Since 1994",
    "since.2016": "Since 2016",
    "reserva.btn": "Book now",
    "metodo.eyebrow": "The Pilar Garijo method",
    "metodo.h2a": "How can we",
    "metodo.h2b": "help you?",
    "metodo.f1": "<b>Find the root of your problem</b>",
    "metodo.f2": "<b>Reduce your pain</b>",
    "metodo.f3": "<b>Move again without limitations</b>",
    "metodo.f4": "<b>Restore your body's balance</b>",
    "metodo.quote": "\"At our Centres, my team and I put all our care and this method at your disposal. Let us help you.\"",
    "reviews.eyebrow": "Reviews",
    "reviews.h2a": "What people say on",
    "reviews.count": "23 reviews on Google",
    "reviews.cta": "See all on Google",
    "testimonials.eyebrow": "Testimonials",
    "testimonials.h2a": "What people say",
    "testimonials.h2b": "about us",
    "testimonials.sub": "Patients from our centres share their experience with the method.",
    "team.eyebrow": "Who we are",
    "team.h2a": "The team that will",
    "team.h2b": "take care of you",
    "team.sub": "A close-knit team, present in all three of our centres, dedicated to your wellbeing in every session.",
    "cursos.eyebrow": "Training",
    "cursos.h2": "Our courses",
    "cursos.p": "Discover our training offer.",
    "cursos.btn": "See the courses",
    "cta.h2a": "You don't have to",
    "cta.h2b": "live with pain",
    "cta.p": "While other techniques take dozens of sessions to give you a solution, here we assess your case and you'll see results from day one.",
    "cta.tagline": "Book your appointment and we'll see you at the centre.",
    "cta.button": "Book on WhatsApp",
    "footer.blurb": "The highest quality solutions for your wellbeing needs. In Madrid since 1994.",
    "footer.centros": "Centres",
    "footer.enlaces": "Links",
    "footer.equipo": "Meet the team",
    "nav.cursos": "Our courses",
    "nav.privada": "Private area",
    "footer.trabaja": "Work with us",
    "footer.contacto": "Contact",
    "footer.rights": "All rights reserved © Pilar Garijo & Linares Gestión de Masajes S.L.",
    "footer.legal": "Legal notice · Privacy · Cookies"
  };

  var esCache = null;
  function cacheES() {
    if (esCache) return;
    esCache = new Map();
    document.querySelectorAll("[data-i18n]").forEach(function (el) { esCache.set(el, el.innerHTML); });
  }
  function translate(lang) {
    cacheES();
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (lang === "en" && EN[key] != null) el.innerHTML = EN[key];
      else el.innerHTML = esCache.get(el);
    });
  }
  cacheES();
  document.addEventListener("pg:langchange", function (e) { translate(e.detail.lang); });

  /* ---------- Reveal on scroll ---------- */
  if (!window.matchMedia || !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }
})();
