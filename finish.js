let selectedPlan = localStorage.getItem("selectedPlan");
let selectedAmount = localStorage.getItem("selectedAmount");
let selectedPlanAmount = document.getElementById("selected-plan-amount");
selectedPlanAmount.textContent = selectedPlan + " " + selectedAmount;
