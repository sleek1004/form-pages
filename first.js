

window.addEventListener("load", function () {

    const nameInput = document.getElementById("name-input");
    const emailInput = document.getElementById("email-input");
    const phoneInput = document.getElementById("phone-input");
    const errorMessages = document.querySelectorAll(".error-message");
    
    let form1 = document.querySelector("#my-form");
    
        form1.addEventListener("click", function (event) {
          event.preventDefault();
    
          let isValid = true;
    
          if (!nameInput.value) {
            errorMessages[0].style.display = "block";
            http:nameInput.style.borderColor = "red";
            isValid = false;
          } else {
            errorMessages[0].style.display = "none";
            http:nameInput.style.borderColor = "";
          }
    
          if (!emailInput.value) {
            errorMessages[1].style.display = "block";
            http:emailInput.style.borderColor = "red";
            isValid = false;
          } else {
            errorMessages[1].style.display = "none";
            http:emailInput.style.borderColor = "";
          }
    
          if (!phoneInput.value) {
            errorMessages[2].style.display = "block";
            http:phoneInput.style.borderColor = "red";
            isValid = false;
          } else {
            errorMessages[2].style.display = "none";
            http:phoneInput.style.borderColor = "";
          }
    
          if (isValid) {
            window.location.href = "page2.html";
          }
        });
      });

   








