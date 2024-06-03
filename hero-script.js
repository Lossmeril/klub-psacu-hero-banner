window.onload = function () {
  const left = document.getElementById("left-side");
  const slider = document.getElementById("mobile-drag");

  const handleMove = (e) => {
    left.style.width = `${(e.clientX / window.innerWidth) * 100}%`;
    slider.style.left = `${(e.clientX / window.innerWidth) * 100}%`;
    left.classList.remove("intro-animation");
    slider.classList.remove("slider-intro-animation");
  };

  document.onmousemove = (e) => handleMove(e);

  document.ontouchmove = (e) => handleMove(e.touches[0]);
};
