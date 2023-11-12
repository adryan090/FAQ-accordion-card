const toggleQuestion = document.querySelectorAll(".title");
const toggleIcon = document.querySelectorAll(".icon");
const toggleAnswer = document.querySelectorAll(".answer");

[toggleQuestion, toggleIcon].forEach((arr) => {
  arr.forEach((el, index) => {
    el.addEventListener("click", () => {
      toggleQuestion[index].classList.toggle("active");
      toggleIcon[index].classList.toggle("active");
      toggleAnswer[index].classList.toggle("active");
    });
  });
});
