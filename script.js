window.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  const menuBtn = document.querySelector("menu-btn");
  const navigation = document.querySelector("navigation");
  const backBtn = document.querySelector("back-btn");

  menuBtn.addEventListener("click", () => {
    backBtn.classList.toggle("active");
  });
});
