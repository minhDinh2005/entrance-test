const form = document.getElementById("form");

form.addEventListener("submit" ,(e) => {
    e.preventDefault();

    const data = {
        username: form.username.value.trim(),
        password: form.password.value,
    }
    logIn(data)
})
function logIn(LoginData) {
    if(localStorage.getItem(LoginData.username) == null){
        alert("username ko ton tai")
    }
    else if((LoginData.username) != LoginData.password)  {
        alert("password ko ton tai")
    }
    else{
        alert("login thanh cong ")
    }
}