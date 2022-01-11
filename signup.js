const form = document.getElementById("form")
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
        username: form.username.value.trim(),
        password: form.password.value,
    }


})
function signup(signUpData) {
    if(localStorage.getItem(signUpData.username) != null) {
        alert("username da ton tai")
    }
    else{
        localStorage.setItem(signUpData.username,signUpData.password);
        alert("Dang ki thanh cong")
    }
    
}