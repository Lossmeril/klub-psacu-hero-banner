window.onload = function () {
  const left = document.getElementById("left-side");
  const slider = document.getElementById("slider");
  const petrButton = document.getElementById("petr-activator");
  const klubButton = document.getElementById("klub-activator");

  var leftActive = true;

  petrButton.addEventListener("click", switchSides, false);
  klubButton.addEventListener("click", switchSides, false);

  setTimeout(function () {
    left.classList.remove("intro-animation");
    slider.classList.remove("slider-intro-animation");
    petrButton.classList.remove("button-intro-animation");
  }, 3500);

  function switchSides() {
    if (leftActive) {
      inactivate(left);
      inactivate(slider);
      inactivate(petrButton);
      activate(klubButton);
      leftActive = false;
    } else {
      activate(left);
      activate(slider);
      activate(petrButton);
      inactivate(klubButton);
      leftActive = true;
    }
  }

  function activate(element) {
    element.classList.remove("inactive");
    element.classList.add("active");
  }

  function inactivate(element) {
    element.classList.remove("active");
    element.classList.add("inactive");
  }
};
