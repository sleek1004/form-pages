const nameInput = document.querySelector('input[placeholder="Name"]');
  const emailInput = document.querySelector('input[placeholder="Email"]');
  const phoneInput = document.querySelector('input[placeholder="e.g. +1 2345673"]');
  const nextButton = document.querySelector('.firstbutton');

  // add event listener to the next button
  nextButton.addEventListener('click', () => {
    // check if any of the inputs are empty
    if (nameInput.value === '') {
      nameInput.nextElementSibling.style.display = 'block';
    } else {
      nameInput.nextElementSibling.style.display = 'none';
    }
    if (emailInput.value === '') {
      emailInput.nextElementSibling.style.display = 'block';
    } else {
      emailInput.nextElementSibling.style.display = 'none';
    }
    if (phoneInput.value === '') {
      phoneInput.nextElementSibling.style.display = 'block';
    } else {
      phoneInput.nextElementSibling.style.display = 'none';
    }
    
    // prevent form submission if any input is empty
    if (nameInput.value === '' || emailInput.value === '' || phoneInput.value === '') {
      event.preventDefault();
    } else {
      // if all inputs are filled, go to the next page
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
