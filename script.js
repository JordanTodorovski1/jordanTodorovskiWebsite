document.querySelectorAll(".card-header").forEach((button) => {
  button.addEventListener("click", function () {
    let target = document.querySelector(this.getAttribute("data-target"));
    target.classList.toggle("show");
  });
});
