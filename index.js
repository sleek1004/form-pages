
  // Get the toggle button and the plans container
  const toggleBtn = document.getElementById("toggle-box");
  const plansContainer = document.querySelector(".plans-container");
  const nextBtn = document.getElementById("pageNextButton");

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
  
  
