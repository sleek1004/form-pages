const form = document.querySelector('form');
const nameInput = form.querySelector('input[type="text"][placeholder="Name"]');
const emailInput = form.querySelector('input[type="text"][placeholder="Email"]');
const phoneInput = form.querySelector('input[type="number"][placeholder="e.g. +1 2345673"]');
const errorMessages = form.querySelectorAll('.error-message');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log("the  form is submitted");
  
  let isValid = true;

  if (!nameInput.value) {
    errorMessages[0].style.display = 'block';
    isValid = false;
  } else {
    errorMessages[0].style.display = 'none';
  }

  if (!emailInput.value) {
    errorMessages[1].style.display = 'block';
    isValid = false;
  } else {
    errorMessages[1].style.display = 'none';
  }

  if (!phoneInput.value) {
    errorMessages[2].style.display = 'block';
    isValid = false;
  } else {
    errorMessages[2].style.display = 'none';
  }

  if (isValid) {
    window.location.href = 'page2.html';
  }
});




let paragraphs = document.querySelectorAll(".duration");

function togglecheckbox() {
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

const plans = document.querySelectorAll(".plan");
let selectedPlan = null;
plans.forEach((plan) => {
  plan.addEventListener("click", function () {
    if (selectedPlan) {
      selectedPlan.classList.remove("selected");
    }
    plan.classList.add("selected");
    selectedPlan = plan;
  });
});

// Get the toggle button and the plans container
const toggleBtn = document.getElementById("toggle-box");
const plansContainer = document.querySelector(".plans-container");

const nextBtn = document.getElementById("pagenextbutton");

nextBtn.addEventListener("click", () => {
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
