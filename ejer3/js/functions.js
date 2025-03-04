document.querySelector(".display-button").addEventListener("click", function() {
  document.querySelector("nav").classList.toggle("active");
  document.querySelector(".display-button").classList.toggle("active");
  document.querySelectorAll(".display-button div").forEach((element) => {
    element.classList.toggle("active");
  })
});
  