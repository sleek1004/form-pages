


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

