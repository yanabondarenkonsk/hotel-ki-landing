// Плавный скролл по якорям
document.addEventListener("click", (event) => {
  const link = event.target.closest('a[href^="#"]');
  if (!link) return;

  const href = link.getAttribute("href");
  if (!href || href === "#") return;

  const target = document.querySelector(href);
  if (!target) return;

  event.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
});

// Аккордеон FAQ
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  const header = item.querySelector(".faq-item__header");
  const body = item.querySelector(".faq-item__body");
  if (!header || !body) return;

  const setMaxHeight = (open) => {
    if (open) {
      body.style.maxHeight = body.scrollHeight + "px";
    } else {
      body.style.maxHeight = "0";
    }
  };

  // начальное состояние — всё свернуто
  setMaxHeight(false);

  header.addEventListener("click", () => {
    const isOpen = item.classList.toggle("faq-item--open");
    setMaxHeight(isOpen);

    // опционально: закрываем остальные
    faqItems.forEach((other) => {
      if (other !== item && other.classList.contains("faq-item--open")) {
        other.classList.remove("faq-item--open");
        const otherBody = other.querySelector(".faq-item__body");
        if (otherBody) {
          otherBody.style.maxHeight = "0";
        }
      }
    });
  });
});

// Год в футере
const yearEl = document.getElementById("js-year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear().toString();
}

