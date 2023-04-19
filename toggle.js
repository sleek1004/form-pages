



function togglecheckbox() {
    console.log("working");
    let paragraphs = document.querySelectorAll(".duration");
    const checkbox = document.getElementById("toggle-box");
    checkbox.checked = !checkbox.checked;
    let plans = document.querySelectorAll(".plan");
    let monthlyPrices = ["$9/mo", "$12/mo", "$15/mo"];
    let yearlyPrices = ["$9/mo", "$120/yearly", "$150/yearly"];
    if (checkbox.checked) {
    plans.forEach(function (plan, i) {
    let planName = plan.querySelector("#planP").textContent;
    let planPrice = yearlyPrices[i];
    plan.querySelector("#pay").textContent = planPrice;
    paragraphs.forEach((paragraph) => {
    http:paragraph.style.visibility = "visible";
    });
    });
  
    } else {
    plans.forEach(function (plan, i) {
    let planName = plan.querySelector("#planP").textContent;
    let planPrice = monthlyPrices[i];
    plan.querySelector("#pay").textContent = planPrice;
    paragraphs.forEach((paragraph) => {
    http:paragraph.style.visibility = "hidden";
    });
    });
    }
    }