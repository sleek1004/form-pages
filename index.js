window.addEventListener("load", function () {


const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const phoneInput = document.getElementById("phone-input");
const errorMessages = document.querySelectorAll(".error-message");




let form1 = document.querySelector(".my-form");
  
if (form1) {



    form1.addEventListener("click", function (event) {
      event.preventDefault();
     

      let isValid = true;

      if (!nameInput.value) {
        errorMessages[0].style.display = "block";
        nameInput.style.borderColor = "red";
        isValid = false;
      } else {
        errorMessages[0].style.display = "none";
        nameInput.style.borderColor = "";
      }

      if (!emailInput.value) {
        errorMessages[1].style.display = "block";
        emailInput.style.borderColor = "red";
        isValid = false;
      } else {
        errorMessages[1].style.display = "none";
        emailInput.style.borderColor = "";
      }

      if (!phoneInput.value) {
        errorMessages[2].style.display = "block";
        phoneInput.style.borderColor = "red";
        isValid = false;
      } else {
        errorMessages[2].style.display = "none";
        phoneInput.style.borderColor = "";
      }

      if (isValid) {
        window.location.href = "page2.html";
      }
    });
  }
  });

  document.addEventListener('DOMContentLoaded', function() {

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
});






document.addEventListener('DOMContentLoaded', function() {
  function togglecheckbox() {
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
          paragraph.style.visibility = "visible";
        });
      });
    } else {
      plans.forEach(function (plan, i) {
        let planName = plan.querySelector("#planP").textContent;
        let planPrice = monthlyPrices[i];
        plan.querySelector("#pay").textContent = planPrice;
        paragraphs.forEach((paragraph) => {
          paragraph.style.visibility = "hidden";
        });
      });
    }
  }

});

// Get the toggle button and the plans container
const toggleBtn = document.getElementById("toggle-box");
const plansContainer = document.querySelector(".plans-container");

const nextBtn = document.getElementById("pageNextButton");
document.addEventListener('DOMContentLoaded', function() {
if (nextBtn) {
  nextBtn.addEventListener("submit", () => {
    const isYearly = toggleBtn.checked;

    const selectedPlan = plansContainer.querySelector(".selected");

    if (selectedPlan) {
      const planName = selectedPlan.querySelector("#planP");

      let url;
      if (isYearly) {
        url = `/addons.html`;
      } else {
        url = `/step3monthly.html`;
      }

      window.location.href = url;
    }
  });
}
});