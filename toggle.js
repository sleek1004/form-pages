let checkbox2 = document.querySelectorAll(".toggle")


checkbox2.addEventListener("change", function() {
  console.log("Checkbox changed!"); // add this line
  if (this.checked) {
    yearlyLabel.classList.add("active");
    monthlyLabel.classList.remove("active");
    window.location.href = "page2Yearly.html";
  } else {
    monthlyLabel.classList.add("active");
    yearlyLabel.classList.remove("active");
    window.location.href = "page2Monthly.html";
  }
});
