import navbar from  "./script/index.js";
let mainDiv=document.getElementById("main");
let navbarContainer=document.getElementById("navbar-container")

navbarContainer.innerHTML=navbar()

var usersData=JSON.parse(localStorage.getItem("userData")) || []
var allData=JSON.parse(localStorage.getItem("userDetails")) || []
document.querySelector("#userSubmit").addEventListener("click",()=>{
  event.preventDefault();

       let name=document.querySelector("#userName").value;
      let password=document.querySelector("#userPassword").value;
       
      var flag=false;
      var x;
      
    usersData.forEach((element,index) => {
        if(name==element.name && password==element.password)
        {
            flag=true
            x=index
            }
    });
    
   
    if(flag)
    {
        alert("login succesful")
        localStorage.setItem("userDetails",JSON.stringify([x,flag]));
        // console.log(userDetails)
        window.location.href="home.html"
    }else{
        alert("incorect credentials")
        // localStorage.setItem("userDetails",JSON.stringify(x,flag));
        // console.log(usersDetails)
    }
})