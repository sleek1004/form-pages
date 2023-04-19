

let plans2 = document.querySelectorAll(".plan");
let selectedPlan = null;
plans2.forEach((plan) => {
plan.addEventListener("click", function () {
if (selectedPlan) {
selectedPlan.classList.remove("selected");
}
plan.classList.add("selected");
selectedPlan = plan;
});
});





