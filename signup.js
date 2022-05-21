import navbar from  "./script/index.js";
let mainDiv=document.getElementById("main");
let navbarContainer=document.getElementById("navbar-container")

navbarContainer.innerHTML=navbar()

var userData=JSON.parse(localStorage.getItem("userData")) || []
var flag=false;
document.querySelector("#userSubmit").addEventListener("click",()=>{
  event.preventDefault();
    var user={
        name:document.querySelector("#userName").value,
        email:document.querySelector("#userEmail").value,
        password:document.querySelector("#userPassword").value,
        mobile:document.querySelector("#userMobile").value,

    }
    console.log(user)
    userData.push(user);
    
    localStorage.setItem("userData" ,JSON.stringify(userData))
    alert("signup succesful")
    window.location.href="login.html"
})

