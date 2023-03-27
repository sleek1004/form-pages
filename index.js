


function togglecheckbox(){
    const checkbox = document.getElementById("toggle-box")
    checkbox.checked = !checkbox.checked;
}


const plans = document.querySelectorAll(".plan");
let selectedPlan=null;
 plans.forEach(plan =>{
    plan.addEventListener('click', function(){
        if (selectedPlan){
            selectedPlan.classList.remove('selected')
        }
        plan.classList.add('selected')
        selectedPlan = plan
    })
 })

// Get the toggle box element
const toggleBox = document.getElementById('toggle-box');

// Add an event listener to the toggle box element
toggleBox.addEventListener('change', function() {

  // Get the plans container element
  const plansContainer = document.querySelector('.plans-container');

  // Get all the plan elements
  const plans = plansContainer.querySelectorAll('.plan');

  // Check if the toggle is checked (yearly billing)
  if (toggleBox.checked) {
    
    // Change the plan names and prices for yearly billing
    plans[0].querySelector('#planP').textContent = 'Arcade (Yearly)';
    plans[0].querySelector('#pay').textContent = '$90/year';
    
    plans[1].querySelector('#planP').textContent = 'Advanced (Yearly)';
    plans[1].querySelector('#pay').textContent = '$120/year';
    
    plans[2].querySelector('#planP').textContent = 'Pro (Yearly)';
    plans[2].querySelector('#pay').textContent = '$150/year';
  
  } else {
  
    // Change the plan names and prices for monthly billing
    plans[0].querySelector('#planP').textContent = 'Arcade';
    plans[0].querySelector('#pay').textContent = '$9/mo';
    
    plans[1].querySelector('#planP').textContent = 'Advanced';
    plans[1].querySelector('#pay').textContent = '$12/mo';
    
    plans[2].querySelector('#planP').textContent = 'Pro';
    plans[2].querySelector('#pay').textContent = '$15/mo';
  
  }
});
