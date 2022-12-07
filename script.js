const btn = document.querySelector("button");
const body = document.querySelector("body");

btn.addEventListener("click", function () {
  btn.classList.toggle("button--dark");
  body.classList.toggle("body--dark");
  if (btn.classList.value === "button--dark") {
    document.title = "Good Night";
  } else {
    document.title = "Good Morning";
  }
});
