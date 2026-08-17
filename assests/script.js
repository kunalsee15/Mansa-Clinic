// Mansa Clinic — shared behaviour across all pages

document.addEventListener("DOMContentLoaded", function () {
  /* Mobile nav toggle */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* FAQ accordion */
  var faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(function (item) {
    var question = item.querySelector(".faq-question");
    var answer = item.querySelector(".faq-answer");

    question.addEventListener("click", function () {
      var isOpen = item.classList.contains("open");

      // Close all other items (single-open accordion)
      faqItems.forEach(function (other) {
        other.classList.remove("open");
        other.querySelector(".faq-answer").style.maxHeight = null;
        other.querySelector(".faq-question").setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("open");
        answer.style.maxHeight = answer.scrollHeight + "px";
        question.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* Contact form — no backend, so we just confirm receipt locally */
  var form = document.getElementById("appointment-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var success = document.getElementById("form-success");
      if (success) {
        success.classList.add("show");
      }
      form.reset();
    });
  }
});
