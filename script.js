document.querySelectorAll("input:not(input#password-confirm)").forEach( (el)=>{
    el.addEventListener("input", function() {
        if (el.reportValidity()){
            el.toggleAttribute("valid", true);
            el.toggleAttribute('invalid', false);
            el.classList.remove("invalid");
        } else {
            el.toggleAttribute("valid", false);
            el.toggleAttribute('invalid', true);
            el.classList.add("invalid");
        }
    })
});

let password = document.querySelector("#password");
let passwordConfirm = document.querySelector("#password-confirm");
passwordConfirm.addEventListener('input', () => checkPasswordMatch());

function checkPasswordMatch(){
    if(password.checkValidity()){
        if (password.value != passwordConfirm.value){
            passwordConfirm.toggleAttribute("invalid", true);
            passwordConfirm.toggleAttribute("valid", false);
            passwordConfirm.classList.add("invalid");
            passwordConfirm.setCustomValidity("Passwords mismatch");
        } else {
            passwordConfirm.toggleAttribute("valid", true);
            passwordConfirm.toggleAttribute("invalid", false);
            passwordConfirm.classList.remove("invalid");
            passwordConfirm.setCustomValidity("");
        }
            passwordConfirm.reportValidity();
        }
}


