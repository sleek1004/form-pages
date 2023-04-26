function togglecheckbox() {
    console.log("working");
    
    const checkBox = document.getElementById("toggle-box");
    checkBox.checked = !checkBox.checked;
    let plans = document.querySelectorAll(".plan");
   
    if (checkBox.checked) {
      plans.forEach(function (plan, i) {
        let planName = plan.querySelector("#planP").textContent;
        let planPrice = yearlyPrices[i];
        plan.querySelector("#pay").textContent = planPrice;
        paragraphs.forEach((paragraph) => {
          
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
  