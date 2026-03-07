
const signIn = document.getElementById('sign-in');
const userName = document.getElementById('user-name');
const password = document.getElementById('password');
signIn.addEventListener('click', ()=>{
    console.log("Im click");
    const userNameValue =userName.value;
    const passwordValue = password.value;
    if(userNameValue === "admin" && passwordValue === "admin123"){
        console.log(userNameValue);
        console.log(passwordValue);
        window.location.assign('./all.html')
    }
    else{
        alert(`Invalid Username: ${userNameValue} or Passoword: ${passwordValue}`);
        return;
    }
});

