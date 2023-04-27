function togglecheckbox() {
    console.log("working");
    let paragraphs = document.querySelectorAll(".duration");
    const checkBox = document.getElementById("toggle-box");
    checkBox.checked = !checkBox.checked;
    let plans = document.querySelectorAll(".plan");
    let monthlyPrices = ["$9/mo", "$12/mo", "$15/mo"];
    let yearlyPrices = ["$9/mo", "$120/yearly", "$150/yearly"];
    let selectedPlan = '';
    let selectedAmount = '';
    if (checkBox.checked) {
      plans.forEach(function (plan, i) {
        let planName = plan.querySelector("#planP").textContent;
        let planPrice = yearlyPrices[i];
        plan.querySelector("#pay").textContent = planPrice;
        paragraphs.forEach((paragraph) => {
          http:paragraph.style.visibility = "visible";
        });
        if (plan.querySelector(".radio:checked")) {
          selectedPlan = planName;
          selectedAmount = planPrice;
        }
      });
    } else {
      plans.forEach(function (plan, i) {
        let planName = plan.querySelector("#planP").textContent;
        let planPrice = monthlyPrices[i];
        plan.querySelector("#pay").textContent = planPrice;
        paragraphs.forEach((paragraph) => {
          http:paragraph.style.visibility = "hidden";
        });
        if (plan.querySelector(".radio:checked")) {
          selectedPlan = planName;
          selectedAmount = planPrice;
        }
      });
    }

    const checkbox2 = document.getElementById("toggle-box");
    const monthlyLabel = document.getElementById("monthly-label");
    const yearlyLabel = document.getElementById("yearly-label");
  
    if (checkbox2.checked) {
      yearlyLabel.classList.add("active");
      monthlyLabel.classList.remove("active");
    } else {
      monthlyLabel.classList.add("active");
      yearlyLabel.classList.remove("active");
    }
    localStorage.setItem("selectedPlan", selectedPlan);
    localStorage.setItem("selectedAmount", selectedAmount);
  }
  const toggle = document.getElementById("toggle-box");
toggle.addEventListener('change', function (){
  if (this.checked) {
    window.location.href = "page2Yearly.html";
  } else {
    window.location.href = "page2Monthly.html";
  }
});











const toggle = document.getElementById("toggle-box");

toggle.addEventListener('change', function (){
    if(this.checked){
        window.location.href = "page2Yearly.html";
    } else{
        window.location.href = "page2Monthly.html";
    }
});

function toggleCheckBox() {
    const monthlyLabel = document.getElementById("monthly-label");
    const yearlyLabel = document.getElementById("yearly-label");
    const checkbox2 = document.getElementById("toggle-box");
  
    if (checkbox2.checked) {
        yearlyLabel.classList.add("active");
        monthlyLabel.classList.remove("active");
    } else {
        monthlyLabel.classList.add("active");
        yearlyLabel.classList.remove("active");
    }
}

toggleCheckBox();
