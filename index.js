let paragraphs = document.querySelectorAll(".duration")


function togglecheckbox(){
    const checkbox = document.getElementById("toggle-box")
    checkbox.checked = !checkbox.checked;

   
    let plans = document.querySelectorAll(".plan");
    let monthlyPrices = ["$9/mo", "$12/mo", "$15/mo"];
    let yearlyPrices = ["$9/mo", "$120/yearly", "$150/yearly"];
    
  
    if (checkbox.checked) {
      plans.forEach(function(plan, i) {
        let planName = plan.querySelector("#planP").textContent;
        let planPrice = yearlyPrices[i];
        plan.querySelector("#pay").textContent = planPrice;
        paragraphs.forEach((paragraph) => {
            paragraph.style.visibility = "visible";
          });
        
        
      });
    } else {
      plans.forEach(function(plan, i) {
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


  