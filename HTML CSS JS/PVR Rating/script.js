const allstars = document.querySelectorAll(".star");
const content = document.querySelector("#content");

allstars.forEach((star, i) => {
  star.addEventListener("click", () => {
    let current = i;
    allstars.forEach((star, j) => {
      if (current >= j) {
        star.innerHTML = "&#9733";
      } else {
        star.innerHTML = "&#9734";
      }
    });
    switch (i) {
      case 0:
        content.innerHTML = "Terrible";
        break;
      case 1:
        content.innerHTML = "Poor";
        break;
      case 2:
        content.innerHTML = "Average";
        break;
      case 3:
        content.innerHTML = "Good";
        break;
      case 4:
        content.innerHTML = "Excellent";
        break;
    }
    content.style.cssText =
      "width: 300px;text-align: center;background-color: white;border-radius: 50%;height: 50px;color: black;padding: 10px;margin-bottom: 30px;";
  });
});
